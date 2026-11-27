import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const REPO_URL = process.env.INFERRING_REPO_URL || 'https://github.com/anka-afk/Inferring-Intelligence.git';
const REPO_BRANCH = process.env.INFERRING_REPO_BRANCH || 'main';
const ROOT_DIR = process.cwd();
const CACHE_DIR = path.join(ROOT_DIR, '.cache', 'inferring-intelligence');
const PAPERS_CONTENT_DIR = path.join(ROOT_DIR, 'src', 'content', 'papers');
const PAPERS_PUBLIC_DIR = path.join(ROOT_DIR, 'public', 'papers');

function runGit(args, cwd) {
  return execFileSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
}

function ensureRepoSynced() {
  fs.mkdirSync(path.dirname(CACHE_DIR), { recursive: true });
  try {
    if (!fs.existsSync(path.join(CACHE_DIR, '.git'))) {
      console.log(`[sync] Cloning ${REPO_URL}...`);
      runGit(['clone', '--branch', REPO_BRANCH, REPO_URL, CACHE_DIR], ROOT_DIR);
    } else {
      console.log(`[sync] Updating ${REPO_URL} (${REPO_BRANCH})...`);
      runGit(['fetch', 'origin', REPO_BRANCH], CACHE_DIR);
      runGit(['reset', '--hard', `origin/${REPO_BRANCH}`], CACHE_DIR);
    }
    return true;
  } catch (err) {
    console.warn(`[sync] Warning: failed to fetch remote repo (${err.message}).`);
    if (fs.existsSync(path.join(CACHE_DIR, 'manuscripts'))) {
      console.warn('[sync] Falling back to existing local .cache/inferring-intelligence.');
      return true;
    }
    if (fs.existsSync(PAPERS_CONTENT_DIR) && fs.readdirSync(PAPERS_CONTENT_DIR).some((f) => f.endsWith('.md'))) {
      console.warn('[sync] Falling back to existing src/content/papers.');
      return false;
    }
    throw err;
  }
}

function parseMarkdownLink(raw) {
  if (!raw) return null;
  const trimmed = raw.trim();
  const mdMatch = trimmed.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/);
  if (mdMatch) {
    return { label: mdMatch[1].trim(), url: mdMatch[2].trim() };
  }
  const urlMatch = trimmed.match(/(https?:\/\/[^\s)<>]+)/);
  if (urlMatch) {
    return { label: urlMatch[1].trim(), url: urlMatch[1].trim() };
  }
  return null;
}

function parseRootIndex(readmeContent) {
  const indexMap = new Map();
  const lines = readmeContent.split(/\r?\n/);

  for (const line of lines) {
    if (!line.trim().startsWith('|')) continue;
    const cells = line
      .split('|')
      .slice(1, -1)
      .map((c) => c.trim());

    if (cells.length < 3) continue;
    const [numCell, titleCell, topicCell, courseCell = ''] = cells;
    if (!/^\d+$/.test(numCell)) continue;

    const linkMatch = titleCell.match(/\[([^\]]+)\]\(manuscripts\/([^/]+)\/README\.md\)/i);
    if (!linkMatch) continue;

    const tableTitle = linkMatch[1].trim();
    const slug = linkMatch[2].trim();
    const topics = topicCell
      .split(/[、,，/]/)
      .map((t) => t.trim())
      .filter(Boolean);

    const courseLink = parseMarkdownLink(courseCell);

    indexMap.set(slug, {
      number: numCell.padStart(2, '0'),
      order: parseInt(numCell, 10),
      tableTitle,
      topics,
      courseUrl: courseLink?.url || '',
      courseLabel: courseLink?.label || '',
    });
  }

  return indexMap;
}

function stripMarkdownFormatting(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseManuscript(rawContent, slug, indexInfo) {
  const lines = rawContent.split(/\r?\n/);

  let title = indexInfo?.tableTitle || slug;
  let paperUrl = '';
  let paperLabel = '';
  let codeUrl = '';
  let codeLabel = '';
  let venue = '';
  let courseUrl = indexInfo?.courseUrl || '';
  let summary = '';
  let summaryRaw = '';

  const consumedIndices = new Set();

  // Inspect lines before the first '## ' heading for natural metadata
  let firstH2Index = lines.findIndex((line) => /^##\s+/.test(line));
  if (firstH2Index === -1) firstH2Index = Math.min(lines.length, 30);

  let i = 0;
  while (i < firstH2Index) {
    const line = lines[i].trim();

    // First H1 title
    if (!consumedIndices.size && /^#\s+/.test(line)) {
      title = line.replace(/^#\s+/, '').trim();
      consumedIndices.add(i);
      i += 1;
      continue;
    }

    // 原文：...
    if (/^原文\s*[:：]/.test(line)) {
      const val = line.replace(/^原文\s*[:：]/, '').trim();
      const parsed = parseMarkdownLink(val);
      if (parsed) {
        paperUrl = parsed.url;
        paperLabel = parsed.label;
      }
      consumedIndices.add(i);
      i += 1;
      continue;
    }

    // 代码：...
    if (/^代码\s*[:：]/.test(line)) {
      const val = line.replace(/^代码\s*[:：]/, '').trim();
      if (!/^(未提供|无|暂无|none|n\/a)$/i.test(val)) {
        const parsed = parseMarkdownLink(val);
        if (parsed) {
          codeUrl = parsed.url;
          codeLabel = parsed.label;
        }
      }
      consumedIndices.add(i);
      i += 1;
      continue;
    }

    // 发表：...
    if (/^发表\s*[:：]/.test(line)) {
      const val = line.replace(/^发表\s*[:：]/, '').trim();
      venue = stripMarkdownFormatting(val);
      consumedIndices.add(i);
      i += 1;
      continue;
    }

    // 课程 / 视频：...
    if (/^(课程|视频)\s*[:：]/.test(line)) {
      const val = line.replace(/^(课程|视频)\s*[:：]/, '').trim();
      const parsed = parseMarkdownLink(val);
      if (parsed) courseUrl = parsed.url;
      consumedIndices.add(i);
      i += 1;
      continue;
    }

    // Opening blockquote (either "> 一句话总结：..." or opening thesis quote like 01-dpo)
    if (line.startsWith('>') && !summary) {
      const quoteLines = [];
      const quoteIndices = [];
      let j = i;
      while (j < firstH2Index && lines[j].trim().startsWith('>')) {
        quoteLines.push(lines[j].trim().replace(/^>\s?/, ''));
        quoteIndices.push(j);
        j += 1;
      }
      const joined = quoteLines.join(' ').trim();
      const isTldr = /^(\*\*)?一句话总结\s*[:：]/.test(joined);
      if (isTldr) {
        summaryRaw = joined.replace(/^(\*\*)?一句话总结\s*[:：](\*\*)?\s*/, '').trim();
        summary = stripMarkdownFormatting(summaryRaw);
        for (const idx of quoteIndices) consumedIndices.add(idx);
      } else {
        summaryRaw = joined;
        summary = stripMarkdownFormatting(joined);
        for (const idx of quoteIndices) consumedIndices.add(idx);
      }
      i = j;
      continue;
    }

    i += 1;
  }

  // Reconstruct body without consumed header metadata lines
  const remainingLines = lines.filter((_, idx) => !consumedIndices.has(idx));
  let body = remainingLines.join('\n').replace(/^\s+/, '');

  // Rewrite relative asset image paths to /papers/<slug>/assets/...
  let coverImage = '';
  body = body.replace(/!\[([^\]]*)\]\((\.?\/?assets\/[^)]+)\)/g, (_match, alt, relPath) => {
    const cleanRel = relPath.replace(/^\.\//, '');
    const publicPath = `/papers/${slug}/${cleanRel}`;
    if (!coverImage) coverImage = publicPath;
    return `![${alt}](${publicPath})`;
  });

  // Also rewrite raw HTML <img src="assets/..."> if any
  body = body.replace(/(<img\b[^>]*\bsrc=["'])\.?\/?(assets\/[^"']+)(["'])/gi, (_m, p1, relPath, p3) => {
    const publicPath = `/papers/${slug}/${relPath}`;
    if (!coverImage) coverImage = publicPath;
    return `${p1}${publicPath}${p3}`;
  });

  // Count equations & figures for realistic academic reading time estimation
  const displayFenceCount = (body.match(/^```math\b/gm) || []).length;
  const displayDollarCount = Math.floor((body.match(/\$\$/g) || []).length / 2);
  const displayFormulaCount = displayFenceCount + displayDollarCount;
  const inlineGithubCount = (body.match(/\$`[^`\r\n]+`\$/g) || []).length;
  const imageCount = (body.match(/!\[[^\]]*\]\([^)]+\)/g) || []).length;

  const plainText = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\$`[^`]+`\$/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ');
  const cjkCount = (plainText.match(/[\u4e00-\u9fff]/g) || []).length;
  const wordCount = (plainText.match(/[a-zA-Z0-9_]+/g) || []).length;
  const inlineDollarCount = Math.floor((plainText.match(/(?<!\\)\$/g) || []).length / 2);
  const inlineFormulaCount = inlineGithubCount + inlineDollarCount;

  // Academic derivation pace: ~220 chars/min prose + ~20s/display eq + ~2.5s/inline eq + ~15s/figure
  const readingMinutes = Math.max(
    3,
    Math.ceil(
      (cjkCount + wordCount * 0.75) / 220 +
        displayFormulaCount * 0.32 +
        inlineFormulaCount * 0.04 +
        imageCount * 0.25
    )
  );

  return {
    title,
    displayTitle: indexInfo?.tableTitle || title,
    paperUrl,
    paperLabel,
    codeUrl,
    codeLabel,
    venue,
    courseUrl,
    summary: summary || `《推断智能》手稿：${title}`,
    coverImage,
    readingMinutes,
    formulaCount: displayFormulaCount,
    body,
  };
}

function getGitDates(relFilePath) {
  try {
    const updated = runGit(['log', '-1', '--format=%cI', '--', relFilePath], CACHE_DIR);
    const createdAll = runGit(['log', '--follow', '--format=%cI', '--', relFilePath], CACHE_DIR)
      .split(/\r?\n/)
      .filter(Boolean);
    const created = createdAll[createdAll.length - 1] || updated;
    return {
      publishedAt: created || new Date().toISOString(),
      updatedAt: updated || new Date().toISOString(),
    };
  } catch {
    const now = new Date().toISOString();
    return { publishedAt: now, updatedAt: now };
  }
}

function yamlStr(val) {
  return JSON.stringify(val ?? '');
}

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function main() {
  const hasCache = ensureRepoSynced();
  if (!hasCache) return;

  const rootReadmePath = path.join(CACHE_DIR, 'README.md');
  const rootReadme = fs.existsSync(rootReadmePath) ? fs.readFileSync(rootReadmePath, 'utf8') : '';
  const indexMap = parseRootIndex(rootReadme);

  const manuscriptsDir = path.join(CACHE_DIR, 'manuscripts');
  if (!fs.existsSync(manuscriptsDir)) {
    throw new Error(`No manuscripts directory found at ${manuscriptsDir}`);
  }

  // Clean output directories to remove deleted manuscripts
  fs.rmSync(PAPERS_CONTENT_DIR, { recursive: true, force: true });
  fs.rmSync(PAPERS_PUBLIC_DIR, { recursive: true, force: true });
  fs.mkdirSync(PAPERS_CONTENT_DIR, { recursive: true });
  fs.mkdirSync(PAPERS_PUBLIC_DIR, { recursive: true });

  const entries = fs
    .readdirSync(manuscriptsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name));

  let syncedCount = 0;

  for (const dir of entries) {
    const slug = dir.name;
    const readmePath = path.join(manuscriptsDir, slug, 'README.md');
    if (!fs.existsSync(readmePath)) continue;

    const rawContent = fs.readFileSync(readmePath, 'utf8');
    const indexInfo = indexMap.get(slug);
    const numMatch = slug.match(/^(\d+)/);
    const number = indexInfo?.number || (numMatch ? numMatch[1].padStart(2, '0') : '99');
    const order = indexInfo?.order ?? (numMatch ? parseInt(numMatch[1], 10) : 99);
    const topics = indexInfo?.topics?.length ? indexInfo.topics : ['论文解读'];

    const parsed = parseManuscript(rawContent, slug, indexInfo);
    const { publishedAt, updatedAt } = getGitDates(`manuscripts/${slug}/README.md`);

    // Copy assets if present
    const assetsSrc = path.join(manuscriptsDir, slug, 'assets');
    if (fs.existsSync(assetsSrc)) {
      copyDirRecursive(assetsSrc, path.join(PAPERS_PUBLIC_DIR, slug, 'assets'));
    }

    const frontmatterLines = [
      '---',
      `title: ${yamlStr(parsed.title)}`,
      `displayTitle: ${yamlStr(parsed.displayTitle)}`,
      `number: ${yamlStr(number)}`,
      `order: ${order}`,
      `summary: ${yamlStr(parsed.summary)}`,
      `topics: [${topics.map(yamlStr).join(', ')}]`,
      `paperUrl: ${yamlStr(parsed.paperUrl)}`,
      `paperLabel: ${yamlStr(parsed.paperLabel)}`,
      `codeUrl: ${yamlStr(parsed.codeUrl)}`,
      `codeLabel: ${yamlStr(parsed.codeLabel)}`,
      `venue: ${yamlStr(parsed.venue)}`,
      `courseUrl: ${yamlStr(parsed.courseUrl)}`,
      `coverImage: ${yamlStr(parsed.coverImage)}`,
      `readingMinutes: ${parsed.readingMinutes}`,
      `formulaCount: ${parsed.formulaCount}`,
      `publishedAt: ${yamlStr(publishedAt)}`,
      `updatedAt: ${yamlStr(updatedAt)}`,
      `sourceUrl: ${yamlStr(`https://github.com/anka-afk/Inferring-Intelligence/blob/${REPO_BRANCH}/manuscripts/${slug}/README.md`)}`,
      '---',
      '',
    ];

    const outPath = path.join(PAPERS_CONTENT_DIR, `${slug}.md`);
    fs.writeFileSync(outPath, frontmatterLines.join('\n') + parsed.body, 'utf8');
    syncedCount += 1;
    console.log(`[sync] #${number} ${slug} -> "${parsed.displayTitle}" (${topics.join(', ')})`);
  }

  // Write sync metadata so scheduled GitHub Actions can skip builds when nothing changed
  let latestCommit = '';
  try {
    latestCommit = runGit(['rev-parse', 'HEAD'], CACHE_DIR);
  } catch {
    latestCommit = '';
  }
  const syncMetaPath = path.join(ROOT_DIR, 'public', 'sync-meta.json');
  fs.writeFileSync(
    syncMetaPath,
    JSON.stringify(
      {
        repo: 'anka-afk/Inferring-Intelligence',
        branch: REPO_BRANCH,
        commit: latestCommit,
        manuscripts: syncedCount,
        syncedAt: new Date().toISOString(),
      },
      null,
      2
    ) + '\n',
    'utf8'
  );

  console.log(`[sync] Done! Synced ${syncedCount} manuscripts from Inferring-Intelligence (${latestCommit.slice(0, 7) || 'unknown'}).`);
}

main();

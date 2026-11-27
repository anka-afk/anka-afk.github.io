import fs from 'node:fs';
import path from 'node:path';

const OWNER = process.env.BLOG_ISSUES_OWNER || 'anka-afk';
const REPO = process.env.BLOG_ISSUES_REPO || 'anka-afk.github.io';
const LABEL = (process.env.BLOG_ISSUES_LABEL || 'blog').toLowerCase();
const AUTHOR = (process.env.BLOG_ISSUES_AUTHOR || OWNER).toLowerCase();
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';

const ROOT_DIR = process.cwd();
const BLOG_DIR = path.join(ROOT_DIR, 'src', 'content', 'blog');
const ISSUE_FILE_RE = /^issue-\d+\.md$/;

function stripMarkdownForExcerpt(md) {
  return String(md || '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/<img\b[^>]*>/gi, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\$`([^`]+)`\$/g, '$1')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\$([^$\n]+)\$/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s*\[![^\]]+\][^\n]*/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/[*_~`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractDescription(body, fallbackTitle) {
  const lines = String(body || '').split(/\r?\n/);

  // Optional explicit summary blockquote at top: "> 简介：..." or "> 摘要：..."
  for (const rawLine of lines.slice(0, 8)) {
    const line = rawLine.trim();
    const m = line.match(/^>\s*(?:简介|摘要|TL;DR)\s*[:：]\s*(.+)$/i);
    if (m && m[1].trim()) {
      return stripMarkdownForExcerpt(m[1]).slice(0, 140);
    }
  }

  // Otherwise pick first non-empty prose paragraph
  const blocks = String(body || '')
    .replace(/```[\s\S]*?```/g, '\n\n')
    .split(/\r?\n\s*\r?\n/);

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;
    if (/^#{1,6}\s+/.test(trimmed)) continue;
    if (/^!\[.*\]\(.*\)$/.test(trimmed) || /^<img\b/i.test(trimmed)) continue;
    const clean = stripMarkdownForExcerpt(trimmed);
    if (clean.length >= 6) {
      return clean.length > 120 ? clean.slice(0, 118).trim() + '…' : clean;
    }
  }

  return fallbackTitle;
}

function yamlStr(val) {
  return JSON.stringify(val ?? '');
}

async function fetchBlogIssues() {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'anka-blog-issues-sync/1.0',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (TOKEN) {
    headers.Authorization = `Bearer ${TOKEN}`;
  }

  const all = [];
  for (let page = 1; page <= 10; page++) {
    const url =
      `https://api.github.com/repos/${OWNER}/${REPO}/issues` +
      `?state=open&labels=${encodeURIComponent(LABEL)}&creator=${encodeURIComponent(AUTHOR)}&per_page=100&page=${page}`;
    const res = await fetch(url, { headers });
    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      throw new Error(`GitHub Issues API HTTP ${res.status}: ${detail.slice(0, 200)}`);
    }
    const batch = await res.json();
    if (!Array.isArray(batch) || batch.length === 0) break;
    all.push(...batch);
    if (batch.length < 100) break;
  }

  // Strictly keep only open issues authored by AUTHOR with LABEL (never PRs)
  return all.filter((item) => {
    if (!item || item.pull_request) return false;
    const authorLogin = String(item.user?.login || '').toLowerCase();
    if (authorLogin !== AUTHOR) return false;
    const labels = Array.isArray(item.labels) ? item.labels : [];
    return labels.some((l) => String(l?.name || '').toLowerCase() === LABEL);
  });
}

function cleanOldIssueFiles() {
  if (!fs.existsSync(BLOG_DIR)) return;
  for (const name of fs.readdirSync(BLOG_DIR)) {
    if (ISSUE_FILE_RE.test(name)) {
      fs.unlinkSync(path.join(BLOG_DIR, name));
    }
  }
}

async function main() {
  fs.mkdirSync(BLOG_DIR, { recursive: true });

  let issues;
  try {
    issues = await fetchBlogIssues();
  } catch (err) {
    console.warn(`[sync-issues] Warning: failed to fetch GitHub Issues (${err.message}). Keeping existing local files.`);
    return;
  }

  cleanOldIssueFiles();

  for (const issue of issues) {
    const num = issue.number;
    const title = String(issue.title || `随笔 #${num}`).trim();
    const body = String(issue.body || '').trim();
    const description = extractDescription(body, title);

    const extraTags = (issue.labels || [])
      .map((l) => String(l?.name || '').trim())
      .filter((name) => name && name.toLowerCase() !== LABEL);
    const tags = extraTags.length ? extraTags : ['随笔'];

    const publishedAt = issue.created_at || new Date().toISOString();
    const updatedAt =
      issue.updated_at &&
      Math.abs(new Date(issue.updated_at).getTime() - new Date(publishedAt).getTime()) > 60 * 60 * 1000
        ? issue.updated_at
        : '';

    const frontmatter = [
      '---',
      `title: ${yamlStr(title)}`,
      `description: ${yamlStr(description)}`,
      `publishedAt: ${yamlStr(publishedAt)}`,
      ...(updatedAt ? [`updatedAt: ${yamlStr(updatedAt)}`] : []),
      `tags: [${tags.map(yamlStr).join(', ')}]`,
      `issueUrl: ${yamlStr(issue.html_url || '')}`,
      '---',
      '',
    ];

    const outPath = path.join(BLOG_DIR, `issue-${num}.md`);
    fs.writeFileSync(outPath, frontmatter.join('\n') + body + '\n', 'utf8');
    console.log(`[sync-issues] #${num} -> "${title}" (${tags.join(', ')})`);
  }

  console.log(`[sync-issues] Done! Synced ${issues.length} blog issue(s) from ${OWNER}/${REPO}.`);
}

main();

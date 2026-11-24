import { SITE } from '../site.config';

interface ExportMeta {
  title: string;
  url: string;
  summary?: string;
  paperUrl?: string;
  codeUrl?: string;
  venue?: string;
  isPaper?: boolean;
}

/**
 * Converts GitHub/Obsidian-compatible manuscript markdown into clean standard Markdown
 * with $...$ / $$...$$ math delimiters for Obsidian, Typora, and LLMs.
 */
export function buildCleanMarkdown(rawBody: string, meta: ExportMeta): string {
  const lines: string[] = [`# ${meta.title}`, ''];

  if (meta.venue) lines.push(`- Venue: ${meta.venue}`);
  if (meta.paperUrl) lines.push(`- Paper: ${meta.paperUrl}`);
  if (meta.codeUrl) lines.push(`- Code: ${meta.codeUrl}`);
  lines.push(`- Source: ${meta.url}`);
  lines.push('');

  if (meta.summary) {
    lines.push(`> **TL;DR**: ${meta.summary}`);
    lines.push('');
  }

  let body = rawBody || '';

  // Convert ```math ... ``` fenced blocks to $$ ... $$
  body = body.replace(/```math\s*\r?\n([\s\S]*?)```/g, (_m, expr: string) => {
    return `$$\n${expr.trim()}\n$$`;
  });

  // Convert GitHub inline math $`...`$ to standard $...$
  body = body.replace(/\$`([^`\r\n]+)`\$/g, (_m, expr: string) => `$${expr}$`);

  // Convert site-relative /papers/... image links to absolute URLs
  body = body.replace(/!\[([^\]]*)\]\((\/papers\/[^)]+)\)/g, (_m, alt: string, p: string) => {
    return `![${alt}](${SITE.url}${p})`;
  });

  lines.push(body.trim());

  if (meta.isPaper) {
    lines.push('');
    lines.push('---');
    lines.push(
      `> 本文来自 ${SITE.author} 的《${SITE.series.name}》专栏（${meta.url}），采用 CC BY 4.0 许可协议。`
    );
  }

  return lines.join('\n') + '\n';
}

export function extractArxivId(url: string): string {
  const match = url.match(/arxiv\.org\/(?:abs|pdf)\/([0-9]{4}\.[0-9]{4,5}(?:v\d+)?)/i);
  return match ? match[1] : '';
}

export function buildPaperBibtex(meta: {
  slug: string;
  title: string;
  paperUrl: string;
  venue?: string;
}): string {
  const arxivId = extractArxivId(meta.paperUrl);
  const year = arxivId ? `20${arxivId.slice(0, 2)}` : String(new Date().getFullYear());
  const key = meta.slug.replace(/^\d+-/, '').replace(/[^a-zA-Z0-9]/g, '') + year;

  if (arxivId) {
    const lines = [
      `@article{${key},`,
      `  title={${meta.title}},`,
      `  year={${year}},`,
      `  eprint={${arxivId}},`,
      `  archivePrefix={arXiv},`,
      `  url={${meta.paperUrl}},`,
    ];
    if (meta.venue) {
      lines.push(`  note={${meta.venue}},`);
    }
    lines.push('}');
    return lines.join('\n');
  }

  return [
    `@misc{${key},`,
    `  title={${meta.title}},`,
    `  author={${SITE.author}},`,
    `  year={${year}},`,
    `  url={${SITE.url}/papers/${meta.slug}},`,
    '}',
  ].join('\n');
}

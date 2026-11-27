import { SITE } from '../site.config';

export interface OgCardOptions {
  kicker: string;
  title: string;
  summary: string;
  footerLeft: string;
  footerRight?: string;
}

export function escapeXml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function tokenWidth(tok: string): number {
  let w = 0;
  for (const ch of tok) {
    w += /[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]/.test(ch) ? 1.85 : 1;
  }
  return w;
}

export function wrapText(text: string, maxUnits: number, maxLines: number): string[] {
  const tokens = text.match(/[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]|\S+\s*|\s+/g) || [];
  const lines: string[] = [];
  let current = '';
  let units = 0;

  for (const tok of tokens) {
    const w = tokenWidth(tok);
    if (units + w > maxUnits && current.trim().length > 0) {
      lines.push(current.trim());
      if (lines.length >= maxLines) {
        lines[maxLines - 1] = lines[maxLines - 1].replace(/[.,:;，。：；\s]+$/, '') + '…';
        return lines;
      }
      current = tok.trimStart();
      units = tokenWidth(current);
    } else {
      current += tok;
      units += w;
    }
  }
  if (current.trim() && lines.length < maxLines) {
    lines.push(current.trim());
  }
  return lines;
}

export function renderOgSvg({
  kicker,
  title,
  summary,
  footerLeft,
  footerRight = `${SITE.author} · ankaanka.org`,
}: OgCardOptions): string {
  const titleLines = wrapText(title, 38, 2);
  const summaryLines = wrapText(summary, 66, 3);

  const titleSvg = titleLines
    .map(
      (line, idx) =>
        `<text x="80" y="${238 + idx * 58}" fill="#F3EEFA" font-size="44" font-weight="800" font-family="Plus Jakarta Sans, PingFang SC, Microsoft YaHei, sans-serif">${escapeXml(line)}</text>`
    )
    .join('');

  const summaryBaseY = 238 + titleLines.length * 58 + 34;
  const summarySvg = summaryLines
    .map(
      (line, idx) =>
        `<text x="80" y="${summaryBaseY + idx * 34}" fill="#B9ABC9" font-size="22" font-weight="400" font-family="Plus Jakarta Sans, PingFang SC, Microsoft YaHei, sans-serif">${escapeXml(line)}</text>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow1" cx="85%" cy="15%" r="55%">
      <stop offset="0%" stop-color="#8B5CF6" stop-opacity="0.34"/>
      <stop offset="100%" stop-color="#110C1A" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="12%" cy="92%" r="48%">
      <stop offset="0%" stop-color="#63418E" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="#110C1A" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.2" fill="#D8BAFF" fill-opacity="0.14"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="#110C1A"/>
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>
  <rect width="1200" height="630" fill="url(#dots)"/>

  <!-- Inner Editorial Frame -->
  <rect x="40" y="40" width="1120" height="550" rx="26" fill="#181223" fill-opacity="0.72" stroke="#3E2D58" stroke-width="1.5"/>

  <!-- Series Kicker -->
  <rect x="80" y="96" width="10" height="10" rx="5" fill="#D8BAFF"/>
  <text x="104" y="106" fill="#D8BAFF" font-size="20" font-weight="600" font-family="JetBrains Mono, monospace">${escapeXml(kicker)}</text>

  <!-- Title -->
  ${titleSvg}

  <!-- Subtle accent divider -->
  <rect x="80" y="${summaryBaseY - 38}" width="56" height="3" rx="1.5" fill="#D8BAFF" fill-opacity="0.7"/>

  <!-- Summary -->
  ${summarySvg}

  <!-- Bottom Meta Footer -->
  <line x1="80" y1="510" x2="1120" y2="510" stroke="#2E2242" stroke-width="1.2"/>
  <text x="80" y="552" fill="#9A8BB2" font-size="18" font-family="JetBrains Mono, monospace">${escapeXml(footerLeft)}</text>
  <text x="1120" y="552" text-anchor="end" fill="#D8BAFF" font-size="20" font-weight="600" font-family="JetBrains Mono, monospace">${escapeXml(footerRight)}</text>
</svg>`;
}

export function ogSvgResponse(svg: string): Response {
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

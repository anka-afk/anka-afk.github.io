export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

export function estimateReadingMinutes(text: string): number {
  const displayEqs =
    (text.match(/^```math\b/gm) || []).length + Math.floor((text.match(/\$\$/g) || []).length / 2);
  const inlineEqs = (text.match(/\$`[^`\r\n]+`\$/g) || []).length;
  const imgs = (text.match(/!\[[^\]]*\]\([^)]+\)/g) || []).length;

  const clean = text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\$`[^`]+`\$/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ');
  const cjk = (clean.match(/[\u4e00-\u9fff]/g) || []).length;
  const words = (clean.match(/[a-zA-Z0-9_]+/g) || []).length;
  return Math.max(
    1,
    Math.ceil((cjk + words * 0.75) / 260 + displayEqs * 0.3 + inlineEqs * 0.04 + imgs * 0.2)
  );
}

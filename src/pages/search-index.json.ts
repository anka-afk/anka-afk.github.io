import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { PROJECTS } from '../site.config';

export const GET: APIRoute = async () => {
  const papers = await getCollection('papers');
  const posts = (await getCollection('blog')).filter((p) => !p.data.draft);

  const items = [
    ...papers.map((p) => ({
      type: 'paper',
      title: `#${p.data.number} ${p.data.displayTitle}`,
      summary: p.data.summary,
      tags: [...p.data.topics, p.data.venue].filter(Boolean),
      excerpt: (p.body || '').slice(0, 600),
      url: `/papers/${p.id}`,
      external: false,
    })),
    ...posts.map((p) => ({
      type: 'blog',
      title: p.data.title,
      summary: p.data.description,
      tags: p.data.tags,
      excerpt: (p.body || '').slice(0, 600),
      url: `/blog/${p.id}`,
      external: false,
    })),
    ...PROJECTS.map((proj) => ({
      type: 'project',
      title: proj.name,
      summary: proj.description,
      tags: [...proj.tags, proj.language, proj.category],
      excerpt: proj.repo,
      url: proj.demoUrl || proj.url,
      external: Boolean((proj.demoUrl || proj.url).startsWith('http')),
    })),
  ];

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};

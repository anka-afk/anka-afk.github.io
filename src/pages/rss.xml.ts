import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../site.config';

export async function GET(context: APIContext) {
  const papers = await getCollection('papers');
  const posts = (await getCollection('blog')).filter((p) => !p.data.draft);

  const combined = [
    ...papers.map((p) => ({
      title: `[推断智能 #${p.data.number}] ${p.data.displayTitle}`,
      description: p.data.summary,
      pubDate: p.data.updatedAt,
      link: `/papers/${p.id}`,
    })),
    ...posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.publishedAt,
      link: `/blog/${p.id}`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: `${SITE.title} · 推断智能与随笔`,
    description: SITE.description,
    site: context.site || SITE.url,
    items: combined,
    customData: '<language>zh-cn</language>',
  });
}

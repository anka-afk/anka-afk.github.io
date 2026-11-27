import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../../site.config';
import { ogSvgResponse, renderOgSvg } from '../../utils/og';

export const GET: APIRoute = async () => {
  const papers = await getCollection('papers');
  const blogPosts = (await getCollection('blog')).filter((p) => !p.data.draft);

  const svg = renderOgSvg({
    kicker: SITE.tagline,
    title: `${SITE.title} · 论文笔记、工程与随笔`,
    summary: SITE.bio,
    footerLeft: `《推断智能》 ${papers.length} 篇  ·  随笔 ${blogPosts.length} 篇  ·  AstrBot`,
  });

  return ogSvgResponse(svg);
};

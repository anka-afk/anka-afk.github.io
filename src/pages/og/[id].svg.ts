import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { ogSvgResponse, renderOgSvg } from '../../utils/og';

export const getStaticPaths: GetStaticPaths = async () => {
  const papers = await getCollection('papers');
  return papers.map((paper) => ({
    params: { id: paper.id },
    props: { paper },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { paper } = props as { paper: Awaited<ReturnType<typeof getCollection<'papers'>>>[number] };
  const venue = paper.data.venue ? ` · ${paper.data.venue.split('（')[0]}` : '';
  const topicsText = paper.data.topics.map((t: string) => `#${t}`).join('   ');

  const svg = renderOgSvg({
    kicker: `《推断智能》 #${paper.data.number}${venue}`,
    title: paper.data.displayTitle,
    summary: paper.data.summary,
    footerLeft: topicsText,
  });

  return ogSvgResponse(svg);
};

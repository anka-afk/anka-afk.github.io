import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { formatDate } from '../../../utils/format';
import { ogSvgResponse, renderOgSvg } from '../../../utils/og';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = (await getCollection('blog')).filter((p) => !p.data.draft);
  return posts.map((post) => ({
    params: { id: post.id },
    props: { post },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as { post: Awaited<ReturnType<typeof getCollection<'blog'>>>[number] };
  const tagsText = post.data.tags.map((t: string) => `#${t}`).join('   ') || 'Writing · Blog';

  const svg = renderOgSvg({
    kicker: `随笔 · ${formatDate(post.data.publishedAt)}`,
    title: post.data.title,
    summary: post.data.description,
    footerLeft: tagsText,
  });

  return ogSvgResponse(svg);
};

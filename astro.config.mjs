import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkGithubMath } from './src/plugins/remark-github-math.mjs';
import { remarkObsidianCallout } from './src/plugins/remark-obsidian-callout.mjs';

export default defineConfig({
  site: 'https://ankaanka.org',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkMath, remarkGithubMath, remarkObsidianCallout],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          strict: false,
          throwOnError: false,
        },
      ],
    ],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'tokyo-night',
      },
      wrap: true,
    },
  },
});

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const papers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    displayTitle: z.string(),
    number: z.string(),
    order: z.number(),
    summary: z.string(),
    topics: z.array(z.string()).default([]),
    paperUrl: z.string().default(''),
    paperLabel: z.string().default(''),
    codeUrl: z.string().default(''),
    codeLabel: z.string().default(''),
    venue: z.string().default(''),
    courseUrl: z.string().default(''),
    coverImage: z.string().default(''),
    readingMinutes: z.number().default(5),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    sourceUrl: z.string().default(''),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
    issueUrl: z.string().optional(),
  }),
});

export const collections = { papers, blog };

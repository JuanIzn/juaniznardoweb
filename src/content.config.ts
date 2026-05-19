import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['in-progress', 'complete']),
    tech: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    order: z.number(),
  }),
});

export const collections = { work };

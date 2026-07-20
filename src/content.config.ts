import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
	loader: glob({ pattern: '**/[^._]*.{md,mdx}', base: './src/content/work' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date().optional(),
		tags: z.array(z.string()),
		img: z.string(),
		img_alt: z.string().optional(),
		role: z.array(z.string()).optional(),
		year: z.string().optional(),
		platforms: z.string().optional(),
		result: z.string().optional(),
		eyebrow: z.string().optional(),
		showcaseArgument: z.string(),
		detailAvailability: z.enum(['internal', 'external', 'interview-only']).optional(),
		homepageOrder: z.number().int().positive().optional(),
		ctaLabel: z.string().optional(),
		externalUrl: z.string().url().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/[^._]*.{md,mdx}', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()),
		img: z.string(),
		img_alt: z.string().optional(),
		role: z.array(z.string()).optional(),
		year: z.string().optional(),
	}),
});

export const collections = { work, projects };

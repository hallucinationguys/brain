import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		lang: z.enum(['en', 'vi']),
		// New fields
		tags: z.array(z.string()).optional(),
		short_title: z.string().optional(),
		authors: z.array(z.string()).optional(),
		// Stats fields
		words: z.number().optional(),
		characters: z.number().optional(),
		blocks: z.number().optional(),
		readingTime: z.string().optional(),
	}),
});

export const collections = { blog };

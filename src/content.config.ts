import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';


// const ca_version = defineCollection({
//   loader: glob({pattern: "*.mdx", base: "src/content/code_aster_versions"}),
//   schema: z.object({
//     title: z.string(),
//     embedUrl: z.string().url(),
//     pubDate: z.date(),
//   }),
// });


export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};

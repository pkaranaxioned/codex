// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
export const collection = {
  snippets: defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    subCategory: z.string(),
    tags: z.array(z.string()),
  }),
}),
};

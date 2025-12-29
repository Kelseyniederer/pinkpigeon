import { defineCollection, z } from "astro:content";
const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      // Allow posts without tags (CMS users may leave it blank).
      tags: z.array(z.string()).optional().default([]),
    }),
});

const pagesCollection = defineCollection({
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string().optional().default(""),
    }),
});
export const collections = {
  posts: postsCollection,
  pages: pagesCollection,
};

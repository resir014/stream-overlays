import { z, defineCollection } from 'astro:content';

const dashboard = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    items: z.array(
      z.object({
        title: z.string(),
        url: z.string(),
      }),
    ),
  }),
});

export const collections = {
  dashboard,
};

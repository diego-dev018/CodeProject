import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: {
        id: z.number(),
        title: z.string(),
        date: z.date(),
        description: z.string(),
        icon: z.string(),
        toc: z.boolean(),
        tags: z.array(z.string()),
        lenguage: z.string(),
    },
});

export const collections = { projects };
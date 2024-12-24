// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeRaw],
  },
});
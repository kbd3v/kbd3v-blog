// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://kbd3v.com',
	// base removed - root domain now
	integrations: [mdx(), sitemap()],
});

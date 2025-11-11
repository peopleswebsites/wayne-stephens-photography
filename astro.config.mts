import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://github.com/peopleswebsites/',
	base: 'minimal-photography-portfolio',
	vite: {
		plugins: [tailwindcss()],
	},
});

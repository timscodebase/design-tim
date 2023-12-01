import { svelte } from '@sveltejs/vite-plugin-svelte'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const svg = !!process.env.USE_SVG

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		svelte({
			preprocess: svg ? [vitePreprocess({ svgo: true, useSimpleStringParser: true })] : [],
			experimental: {
				prebundleSvelteLibraries: true
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}

export default config

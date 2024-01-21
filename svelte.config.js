import adapter from 'svelte-adapter-bun'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import highlighter from './src/lib/utils/codeHighlighter.mjs';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md', '.svelte', '.svx'],
	highlight: {
    highlighter,
  },
}

/** @type {import('vite').UserConfig} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		preprocess(),
		mdsvex(mdsvexOptions)
	],
	kit: {
		adapter: adapter(),
		alias: {
			$data: 'src/lib/data',
			$stores: 'src/lib/stores',
			$utils: 'src/lib/utils'
		}
	}
}

export default config

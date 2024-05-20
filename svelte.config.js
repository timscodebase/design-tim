import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import highlighter from './src/lib/utils/codeHighlighter.mjs'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md', '.svelte', '.svx'],
	highlight: {
		highlighter
	}
}

/** @type {import('vite').UserConfig} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), preprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({
      precompress: true,
    }),
		alias: {
			$assets: 'src/lib/assets',
			$data: 'src/lib/data',
			$stores: 'src/lib/stores',
			$css: 'src/lib/css',
			$utils: 'src/lib/utils'
		}
	}
	// compilerOptions: {
	// 	runes: true
	// }
}

export default config

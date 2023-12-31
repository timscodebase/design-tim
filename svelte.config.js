import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import removeConsole from 'vite-plugin-svelte-console-remover'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md', '.svelte', '.svx']
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), preprocess(), mdsvex(mdsvexOptions)],
	vite: {
		plugins: [removeConsole()]
	},
	kit: {
		adapter: adapter(),
		alias: {
			$stores: 'src/lib/stores',
			$utils: 'src/lib/utils'
		}
	}
}

export default config

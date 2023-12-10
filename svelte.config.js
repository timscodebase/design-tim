import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/kit/vite'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md', '.svelte', '.svx']
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	adapter: adapter({
		runtime: 'nodejs18.x'
	}),
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), preprocess(), mdsvex(mdsvexOptions)],
	kit: {
		alias: {
			$stores: 'src/lib/stores',
			$utils: 'src/lib/utils'
		},
		outDir: 'build'
	}
}

export default config

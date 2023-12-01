import { svelte } from '@sveltejs/vite-plugin-svelte'

/** @type {import('vite').UserConfig} */
const config = {
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}

export default config

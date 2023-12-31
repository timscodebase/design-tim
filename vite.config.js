import path from 'path'
import { partytownVite } from '@builder.io/partytown/utils'
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		partytownVite({
			dest: path.join(__dirname, 'dist', '~partytown')
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}

export default config

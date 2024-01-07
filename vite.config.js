import { sentrySvelteKit } from "@sentry/sveltekit";
import path from 'path'
import { partytownVite } from '@builder.io/partytown/utils'
import { sveltekit } from '@sveltejs/kit/vite'
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "tim-smith-lt",
            project: "javascript-sveltekit"
        }
    }), sveltekit(), partytownVite({
        dest: path.join(__dirname, 'dist', '~partytown')
    }), SvelteKitPWA()],

    test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}

export default config
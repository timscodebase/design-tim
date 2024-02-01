import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "tim-smith-dt",
            project: "javascript-sveltekit"
        }
    }), sveltekit()],

    test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}

export default config
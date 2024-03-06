import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "tim-smith-q4",
            project: "design-tim"
        }
    }), sveltekit()],

    test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}

export default config
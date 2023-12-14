import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import type Config from '@sveltejs/adapter-vercel'

export const config: typeof Config = {
	runtime: 'edge'
}

export const load = (async (e) => {
	try {
		const response = await e.fetch('/api/jobs')
		const jobs = await response.json()

		return { jobs }
	} catch (e) {
		throw error(500, `Could not load your jobs top. Error: ${error}`)
	}
}) satisfies PageLoad

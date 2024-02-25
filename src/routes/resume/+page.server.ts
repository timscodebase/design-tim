import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load = (async (e) => {
	try {
		const response = await e.fetch('/api/jobs')
		const jobs = await response.json()

		return { jobs }
	} catch (e) {
		error(500, `Could not load your jobs top. Error: ${e}`)
	}
}) satisfies PageServerLoad

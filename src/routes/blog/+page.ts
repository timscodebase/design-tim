import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load = (async (e) => {
	try {
		const response = await e.fetch('api/posts')
		const posts = await response.json()

		return { posts }
	} catch (e) {
		error(500, `Could not load your published posts. Error: ${e}`)
	}
}) satisfies PageLoad

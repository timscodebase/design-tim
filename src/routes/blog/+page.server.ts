import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load = (async (e) => {
	try {
		const response = await e.fetch('api/posts')
		const posts = await response.json()
		console.log('Posts: ', posts);

		return { posts }
	} catch (e) {
		error(500, `Could not load your published posts. Error: ${e}`)
	}
}) satisfies PageServerLoad

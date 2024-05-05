import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const config: typeof Config = {
	runtime: 'edge'
}

export const load = (async (e) => {
	try {
		const response = await e.fetch('api/posts')
		const posts = await response.json()

		return { posts }
	} catch (e) {
		error(500, `Could not load your published posts. Error: ${e}`)
	}
}) satisfies PageServerLoad

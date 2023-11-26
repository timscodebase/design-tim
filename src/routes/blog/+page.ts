import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import type { Post } from '$lib/types'

export const load = (async () => {
	try {
		const response = await fetch('api/posts')
		const posts: Post[] = await response.json()
		return { posts }
	} catch (e) {
		throw error(500, `Could not load posts. Error: ${error}`)
	}
}) satisfies PageLoad

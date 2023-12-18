import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import type { PostType } from '$lib/types'

export const load = (async () => {
	try {
		const response = await fetch('api/posts')
		const posts: PostType[] = await response.json()
		return { posts }
	} catch (e) {
		error(500, `Could not load posts. Error: ${error}`)
	}
}) satisfies PageLoad

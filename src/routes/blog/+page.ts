import type { PageLoad } from './$types'
import type { Post } from '$lib/types'

export const load = (async () => {
	const response = await fetch('api/posts')
	const posts: Post[] = await response.json()
	return { posts }
}) satisfies PageLoad

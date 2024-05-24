import type { Config } from '@sveltejs/adapter-vercel';
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const config: Config = {
	runtime: 'edge'
}

export const load = (async (e: any) => {
	try {
		const response = await e.fetch('api/posts')
		const posts = await response.json()

		return { posts }
	} catch (e) {
		error(500, `Could not load your published posts. Error: ${e}`)
	}
}) satisfies PageServerLoad

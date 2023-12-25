import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import type Config from '@sveltejs/adapter-vercel'

export const config: typeof Config = {
	runtime: 'edge'
}

export const load = (async (e) => {
	try {
		const response = await e.fetch('api/projects')
		const projects = await response.json()

		return { projects }
	} catch (e) {
		error(500, `Could not load your projects top. Error: ${error}`)
	}
}) satisfies PageLoad

import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import type Config from '@sveltejs/adapter-vercel'

export const config: typeof Config = {
	runtime: 'edge'
}

export const load = (async (e) => {
	try {
		const response = await e.fetch('api/skills')
		const skills = await response.json()

		return { skills }
	} catch (e) {
		error(500, `Could not load your skills. Error: ${error}`)
	}
}) satisfies PageLoad

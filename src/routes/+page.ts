//
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import type { Config } from '@sveltejs/adapter-vercel'

export const config: Config = {
	runtime: 'edge'
}

export const load = (async (e) => {
	try {
		const response = await e.fetch('api/topSkills')
		const topSkills = await response.json()

		return { topSkills }
	} catch (e) {
		throw error(500, `Could not load your top posts. Error: ${error}`)
	}
}) satisfies PageLoad

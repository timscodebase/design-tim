export const prerender = true
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load = (async () => {
	try {
		const response = await fetch('api/topSkills')
		const topSkills = await response.json()

		return { topSkills }
	} catch (e) {
		throw error(500, `Could not load your top posts. Error: ${error}`)
	}
}) satisfies PageLoad

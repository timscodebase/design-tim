import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load = (async () => {
	try {
		const response = await fetch('api/skills')
		const skills = await response.json()
		return { skills }
	} catch (e) {
		error(500, `Could not load your top posts. Error: ${error}`)
	}
}) satisfies PageLoad

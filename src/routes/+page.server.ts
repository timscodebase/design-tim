import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import type Config from '@sveltejs/adapter-vercel'

export const config: typeof Config = {
	runtime: 'edge'
}

export const load = (async (e) => {
	try {
		const skillsResponse = await e.fetch('api/skills')
		const topSkills = await skillsResponse.json()

		const teachersResponse = await e.fetch('api/teachers')
		const teachers = await teachersResponse.json()

		return { teachers, topSkills }
	} catch (e) {
		error(500, `Could not load your top posts. Error: ${error}`)
	}
}) satisfies PageServerLoad

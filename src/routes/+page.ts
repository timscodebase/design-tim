export const prerender = true
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load = (async () => {
	try {
		const response = await fetch('api/topSkills')
		const topSkills = await response.json()
		localStorage.setItem('tim-smith-topSkills', JSON.stringify(topSkills))
		const cachedTopSkills = localStorage.getItem('tim-smith-topSkills')
		console.log('Cached Top Skills: ', cachedTopSkills)

		return { topSkills }
	} catch (e) {
		throw error(500, `Could not load your top posts. Error: ${error}`)
	}
}) satisfies PageLoad

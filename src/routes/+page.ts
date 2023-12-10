//
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import type { Config } from '@sveltejs/adapter-vercel'

export const config: Config = {
	runtime: 'edge'
}

export const load = (async (e) => {
	const response = await e.fetch('api/topSkills')
	const topSkills = await response.json()

	return { topSkills }
}) satisfies PageLoad

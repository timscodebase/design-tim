import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import type Config from '@sveltejs/adapter-vercel'

export const config: typeof Config = {
	runtime: 'edge'
}

export const load = (async (e) => {
	try {
		const response = await e.fetch('api/photos')
		const photos = await response.json()

		return { photos }
	} catch (e) {
		error(500, `Could not load your photos. Error: ${e}`)
	}
}) satisfies PageServerLoad

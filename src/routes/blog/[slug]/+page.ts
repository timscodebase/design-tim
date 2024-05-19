import type { Config } from '@sveltejs/adapter-vercel';
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const config: Config = {
	runtime: 'nodejs20.x'
}

export const load = (async ({ params }) => {
	try {
		const post = await import(`../../../posts/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}) satisfies PageLoad

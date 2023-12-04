import { json } from '@sveltejs/kit'
import skills from '$lib/skills.json'

export async function GET() {
	console.log('skills', skills)
	return json(skills)
}

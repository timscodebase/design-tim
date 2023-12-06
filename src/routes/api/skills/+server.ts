import { json } from '@sveltejs/kit'
import skills from '$lib/skills.json'

export async function GET() {
	return json(skills)
}

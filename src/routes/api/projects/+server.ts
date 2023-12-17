import { json } from '@sveltejs/kit'
import projects from '$lib/projects.json'

export async function GET() {
	return json(projects)
}

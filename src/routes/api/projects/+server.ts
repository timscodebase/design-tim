import { json } from '@sveltejs/kit'
import projects from '$data/projects.json'

export async function GET() {
	return json(projects)
}

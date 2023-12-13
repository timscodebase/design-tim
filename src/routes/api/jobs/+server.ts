import { json } from '@sveltejs/kit'
import jobs from '$lib/jobs.json'

export async function GET() {
	return json(jobs)
}

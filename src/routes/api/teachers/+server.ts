import { json } from '@sveltejs/kit'
import teachers from '$lib/teachers.json'

export async function GET() {
	return json(teachers)
}

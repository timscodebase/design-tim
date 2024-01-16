import { json } from '@sveltejs/kit'
import teachers from '$data/teachers.json'

export async function GET() {
	return json(teachers)
}

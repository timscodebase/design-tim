import { json } from '@sveltejs/kit'
import photos from '$lib/photos.json'

export async function GET() {
	return json(photos)
}

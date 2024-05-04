import { json } from "@sveltejs/kit";
import photos from "$data/photos.json";

export async function GET() {
  return json(photos);
}

import { json } from "@sveltejs/kit";
import skills from "$data/skills.json";

export async function GET() {
  return json(skills);
}

import { json } from "@sveltejs/kit";
import jobs from "$data/jobs.json";

export async function GET() {
  return json(jobs);
}

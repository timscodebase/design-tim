import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { dev } from "$app/environment";

export const config: typeof Config = {
  runtime: "edge",
};

export const csr = dev;

export const prerender = true;

export const load = (async (e) => {
  try {
    const response = await e.fetch("api/skills");
    const skills = await response.json();

    return { skills };
  } catch (e) {
    error(500, `Could not load your skills. Error: ${e}`);
  }
}) satisfies PageServerLoad;

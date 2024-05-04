import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { dev } from "$app/environment";

export const csr = dev;

export const prerender = true;

export const load = (async (e) => {
  try {
    const response = await e.fetch("api/projects");
    const projects = await response.json();

    return { projects };
  } catch (e) {
    error(500, `Could not load your projects. Error: ${e}`);
  }
}) satisfies PageLoad;

import type { RequestHandler } from './$types'
import { Octokit } from 'https://esm.sh/octokit'

const octokit = new Octokit()

export const GET: RequestHandler = async ({ url }) => {
	const { lan } = url.searchParams
	const response = await octokit.request('GET /search/repositories', {
    q: `language:${lan}`,
    is:owner: 'timscodebase',
    sort: 'stars',
    order: 'desc'
  });

  const repos = response.data.items;
  console.log(repos);

	return repos
}







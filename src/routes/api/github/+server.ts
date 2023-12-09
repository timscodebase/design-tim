import type { RequestHandler } from './$types'
import { Octokit } from 'octokit'
const octokit = new Octokit({
	auth: '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'
})
const githubConfig = {
	owner: 'timscodebase',
	headers: {
		'X-GitHub-Api-Version': '2022-11-28'
	}
}

export const GET: RequestHandler = async () => {
	const response = await octokit.request('GET /repos/{owner}/stargazers', githubConfig)
	const data = await response.data
	console.log(data)
	return { data }
}

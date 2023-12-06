import { json } from '@sveltejs/kit'
import skills from '$lib/skills.json'
function getTopSkills() {
	const topSkills = skills.filter((skill) => skill.usedAt.length >= 3)

	return topSkills
}

export async function GET() {
	const topSkills = getTopSkills()
	return json(topSkills)
}

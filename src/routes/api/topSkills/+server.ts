import { json } from '@sveltejs/kit'
import skills from '$lib/skills.json'
function getTopSkills() {
	const topSkills = skills.filter((skill) => skill.yearsExp > 5)

	return topSkills
}

export async function GET() {
	const topSkills = getTopSkills()
	return json(topSkills)
}

import { json } from '@sveltejs/kit'
import skills from '$lib/skills.json'
function getTopSkills() {
	// return skills with more than 5 yearsExp
	return skills.filter((skill) => skill.yearsExp > 5)
}

export async function GET() {
	const topSkills = getTopSkills()
	return json(topSkills)
}

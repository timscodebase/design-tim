export type Categories = 'sveltekit' | 'svelte'

export type PostType = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}

export type SkillType = {
	name: string
	usedAt: JobType[]
	yearsExp: string
	level: 'beginner' | 'intermediate' | 'advanced'
	category: string
}

export type JobType = {
	company: string
	title: string
	location: string
	dates: string
	description: string
}

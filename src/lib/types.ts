export type Categories = 'sveltekit' | 'svelte'

export type GoalType = {
	goal: string
	description: string
	image: string | null
	thumb: string | null
}

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

export type ProjectType = {
	name: string
	thumbnail: string
	image: string
	where: string
	description: string
	medium: string
	href?: string
	github?: string
}

export type TeacherType = {
	name: string
	url: string
}

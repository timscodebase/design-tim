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
	usedAt: number
	yearsExp: string
	level: 'beginner' | 'intermediate' | 'advanced'
	category: string[]
}

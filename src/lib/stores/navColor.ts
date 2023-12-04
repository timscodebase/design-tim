import { writable } from 'svelte/store'

function createNavColor() {
	const { subscribe, set } = writable('frontend')

	return {
		subscribe,
		// set new color
		set: (c: string) => set(c),
		reset: () => set('frontend')
	}
}

export const navColor = createNavColor()

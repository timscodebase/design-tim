import { writable } from 'svelte/store'

function createShowModal() {
	const { subscribe, set, update } = writable(false)

	return {
		subscribe,
		toggle: () => update((n) => !n),
		reset: () => set(false)
	}
}

export const showModal = createShowModal()

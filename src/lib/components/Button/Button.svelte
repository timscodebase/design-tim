<svelte:options runes={true} />

<script lang="ts">
	import { navColor } from '$stores'

	const { btnRole, btnType } = $props
</script>

<button type={btnType ? 'submit' : null} role={btnRole} class={`${$navColor} resizeable`}>
	<slot />
</button>

<style>
	button {
		text-align: center;
		background: var(--black-75);
		padding: var(--padding-sm) var(--padding-md);
	}
	button.open,
	button:hover,
	button:active {
		color: var(--primary);
		border-color: var(--border-hover);
	}
</style>

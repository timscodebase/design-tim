<script lang="ts">
	import { navColor } from '$stores'
	export let btnRole: undefined | 'link' = undefined
	export let buttonType: null | 'submit' = null
</script>

<button
	type={buttonType ? 'submit' : null}
	role={btnRole}
	class={`${$navColor} resizeable`}
	on:click
>
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

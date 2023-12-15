<script lang="ts">
	import { navColor } from '$stores'
	export let btnRole: undefined | 'link' = undefined
</script>

<button role={btnRole} class={`${$navColor} resizeable`} on:click>
	<slot />
</button>

<style>
	button {
		/* color: var(--text); */
		text-align: center;
		padding: var(--padding-sm) var(--padding-md);
		/* border: var(--border-base); */
		background: var(--black-75);
	}
	button.open,
	button:hover,
	button:active {
		color: var(--primary);
		border-color: var(--border-hover);
	}
</style>

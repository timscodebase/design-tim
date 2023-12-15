<script lang="ts">
	import { navColor } from '$stores'
	export let btnRole: undefined | 'link' = undefined
	export let styled = true
</script>

<button role={btnRole} class={`${$navColor} ${styled ? 'button' : ''} resizeable`} on:click>
	<slot />
</button>

<style>
	.button {
		color: var(--text);
		text-align: center;
		padding: var(--padding-sm);
		margin: var(--margin-sm) var(--margin-sm) 0 var(--margin-sm);
		border: var(--border-base);
		background: var(--black-75);
	}
	button.open,
	button:hover,
	button:active {
		color: var(--primary);
		border-color: var(--border-hover);
	}
</style>

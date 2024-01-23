<script lang="ts">
	import { navColor } from '$stores'

	type BtnRole = undefined | 'link'
	type BtnType = undefined | 'submit'
	let { btnRole, buttonType } = $props<BtnRole, BtnType>()
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

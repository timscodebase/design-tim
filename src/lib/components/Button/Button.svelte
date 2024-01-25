<script lang="ts">
	import { navColor } from '$stores'
	import exp from 'constants'

	type BtnRole = undefined | 'link'
	type BtnType = undefined | 'submit'
	export let btnRole: BtnRole = undefined
	export let btnType: BtnType = undefined
</script>

<button type={buttonType ? 'submit' : null} role={btnRole} class={`${$navColor} resizeable`}>
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

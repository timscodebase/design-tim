<script lang="ts">
	import { Link } from '$lib'
	export let item
	const { goal, description, image, thumb } = item
</script>

<div>
	<h4>{goal}</h4>
	<p>{description}</p>
	{#if image}
		<Link href={image}><img src={thumb} alt={goal} /></Link>
	{/if}
</div>

<style>
	div {
		display: grid;
		grid-template-rows: 1fr auto;
		align-content: baseline;
		gap: var(--gap);
	}
</style>

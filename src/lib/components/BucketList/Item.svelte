<svelte:options runes={true} />

<script lang="ts">
import { Link } from "$lib";
const { item } = $props();
const { goal, description, image, thumb } = item;
</script>

<div>
	<h4>{goal}</h4>
	<p>{description}</p>
	{#if image}
		<a href={image}><img src={thumb} alt={goal} /></a>
	{:else}
		<div></div>
	{/if}
</div>

<style>
	div {
		display: grid;
		grid-template-rows: auto auto 1fr;
		align-items: flex-start;
		gap: var(--gap);
	}

	@media (max-width: 500px) {
		img {
			width: 80svw;
			height: auto;
		}
	}
</style>

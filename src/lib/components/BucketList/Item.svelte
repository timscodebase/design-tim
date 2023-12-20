<script lang="ts">
	export let item
	const { goal, description } = item
</script>

<div>
	<h4>{goal}</h4>
	<p>{description}</p>
</div>

<style>
	div {
		display: grid;
		grid-template-rows: 1fr auto;
		align-content: baseline;
		gap: var(--gap);
	}
</style>

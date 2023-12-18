<div>
	<slot />
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 1rem;
		margin-top: var(--margin-md);
	}
</style>

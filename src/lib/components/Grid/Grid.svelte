<div>
	<slot />
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-template-rows: 200px auto auto;
		grid-gap: 1rem;
		margin-top: var(--margin-md);
	}
</style>

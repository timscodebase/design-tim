<button on:click>
	<slot />
</button>

<style>
	button {
		--size: 65px;
		font-size: 2rem;
		color: var(--text);
		text-align: center;
		min-width: var(--size);
		min-height: var(--size);
		padding: var(--padding-sm);
		padding-top: var(--padding-xs);
		border-radius: var(--border-radius-full);
		border: var(--border-base);
	}
	button:hover,
	button:active {
		color: var(--primary);
		border-color: var(--border-hover);
	}
</style>

<p>
	<slot />
</p>

<style>
	p {
		--turn: 1turn;
		color: var(--primary-2);
		font-size: clamp(1.5rem, 1.75svw, 2rem) !important;
		background: linear-gradient(var(--turn), var(--primary-2), var(--primary));
		background-clip: text;
		-webkit-text-fill-color: transparent;
		padding-top: var(--padding-md);
		padding-bottom: var(--padding-md);
		text-align: justify;
		font-weight: 700;
	}

	@media (max-width: 500px) {
		p {
			text-align: justify;
		}
	}
</style>

<script lang="ts">
	import { Logo, Nav } from '$lib'
</script>

<header>
	<div class="disclaimer">
		<p>
			You are missing some cool <strong>Scroll Driven Animations</strong>! Switch to a chromium based browser for the best experience.
			<a rel="external" target="_blank" href="https://brave.com/"
				>Brave is great and very secure</a
			>
		</p>
	</div>
	<Logo />
	<Nav />
</header>

<style>
	header {
		position: relative;
		padding: var(--padding-md) 0;
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--gap);
		view-transition-name: header;
		z-index: 999999;
		background: var(--black-75);
	}

	.disclaimer {
		background: var(--primary-2);
		color: var(--reverse-text);
		padding: var(--padding-md);
		display: grid;
		place-items: center;

		& strong {
			font-weight: bold;
			color: var(--reverse-text);
		}
	}

	@supports (animation-timeline: view()) {
		.disclaimer {
			display: none;
		}
	}

	@media (max-width: 500px) {
		header {
			gap: 0;
			padding-bottom: 0;
		}
	}
</style>

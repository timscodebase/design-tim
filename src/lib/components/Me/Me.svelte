<script lang="ts">
</script>

<div class="me">
	<img src="/images/me.png" alt="Tim Smith" />
	<div class="gradient" />
</div>

<style>
	.me {
		width: 25svw;
		max-width: 250px;
		height: auto;
		display: grid;
		margin-left: auto;
		margin-right: var(--margin-md);
	}

	/* Mobile screens */
	/* @media (max-width: 600px) {
		.me {
			display: none;
		}
	} */

	.gradient {
		width: 25svw;
		height: 27svw;
		background: linear-gradient(to top left, #000000 5%, #0000002e);
	}

	img {
		transform: scaleX(-1);
		z-index: -1;
	}

	.me > * {
		grid-area: 1 / 1;
	}
</style>

<script lang="ts">
</script>

<div class="me">
	<img src="/images/me.png" alt="Tim Smith" />
	<div class="gradient" />
</div>

<style>
	.me {
		width: 100%;
		height: auto;
		display: grid;
		margin-left: auto;
	}

	@media (max-width: 600px) {
		.me {
			margin-left: 0;
		}
	}

	.gradient {
		background: linear-gradient(to top left, var(--background) 5%, var(--me-trans-background));
	}

	img {
		max-width: 100%;
		transform: scaleX(-1);
		z-index: -1;
	}

	.me > * {
		grid-area: 1 / 1;
	}
</style>

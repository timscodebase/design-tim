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
			width: 60svw;
			margin: 0 var(--margin-sx) 2svh 2svw;
		}
	}

	.gradient {
		height: calc(100% + 1px);
		width: 100%;
		position: absolute;
		top: 5px;
		left: 0;
		z-index: -1;
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

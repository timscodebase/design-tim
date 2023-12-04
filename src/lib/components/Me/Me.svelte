<script lang="ts">
</script>

<div class="me">
	<img src="/images/me.png" alt="Tim Smith" />
	<div class="gradient" />
</div>

<style>
	.me {
		width: 25svw;
		height: auto;
		display: grid;
		margin-left: auto;
		margin-right: auto;
	}

	.gradient {
		width: 25svw;
		height: 31svh;
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

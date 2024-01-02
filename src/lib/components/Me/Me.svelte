<script lang="ts">
	function preload(src) {
		return new Promise(function (resolve) {
			let img = new Image()
			img.onload = resolve
			img.src = src
		})
	}

	let src = 'https://res.cloudinary.com/tithos/image/upload/c_scale,f_auto,q_auto:eco,w_323/v1703907649/me_f8wxaa.png'
</script>

<div class="me">
	{#await preload(src) then _}
		<img {src} alt="Tim Smith" />
	{/await}
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
			width: 80svw;
			margin: 0 auto var(--margin-sm) auto;
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

<script>
	import { name, description } from '$lib/config'
	const logo =
		'https://res.cloudinary.com/tithos/image/upload/c_scale,f_auto,q_auto:eco,w_446/v1703998982/design-tim-genearal-banner_y3aqyx.png'
</script>

<a href="/">
	<img src={logo} alt={`${name} - ${description}`} />
</a>

<style>
	a {
		display: block;
	}

	img {
		width: 100%;
		height: auto;
	}

	@media (max-width: 600px) {
		img {
			width: 80svw;
			margin: 0 auto var(--margin-sm) auto;
		}
	}
</style>

<script>
	import { name, description } from '$lib/config'

	const logo =
		'https://res.cloudinary.com/tithos/image/upload/f_auto,q_auto:eco/v1704304026/design-tim-header-banner_uvvpgy.png'
</script>

<a href="/">
	<h1>
		<img width="740" height="228" src={logo} alt={`${name} - ${description}`} />
	</h1>
</a>

<style>
	a {
		display: block;
	}

	img {
		width: 100%;
		height: auto;
		margin: 0 auto;
	}
</style>

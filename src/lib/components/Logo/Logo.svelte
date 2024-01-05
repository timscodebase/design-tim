<script>
	import { Link } from '$lib'
	import { name, description } from '$lib/config'
	import logo from '$lib/assets/design-tim-header-banner.png'
	console.log('Logo: ', logo);
</script>

<Link href="/">
	<img width="740" height="228" src={logo} alt={`${name} - ${description}`} />
</Link>

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

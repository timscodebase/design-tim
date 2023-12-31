<script>
	import { name, description } from '$lib/config'
	import logo from './design-tim-genearal-banner.png'
</script>

<a href="/">
	<img src={logo} alt={`${name} - ${description}`} />
</a>

<style>
	a {
		display: block;
	}
</style>

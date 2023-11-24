<script lang="ts">
	import { NavOpen } from '$lib'
	import './css/style.css'
	import { Header } from '$lib'

	$: {
		NavOpen = false
	}
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>Tim Smith {new Date().getFullYear()}</p>
</footer>

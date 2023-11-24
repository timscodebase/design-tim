<script lang="ts">
	import './css/style.css'
	import { Header } from '$lib'
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>Tim Smith {new Date().getFullYear()}</p>
</footer>

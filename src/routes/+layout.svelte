<script lang="ts">
	import './css/style.css'
	import { Header } from '$lib'
</script>

<div class="container">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Tim Smith {new Date().getFullYear()}</p>
	</footer>
</div>

<style>
	.container {
		padding: var(--padding-md);
		max-width: 1000px;
		margin: 0 auto;
	}
</style>

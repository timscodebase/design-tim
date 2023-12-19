<script lang="ts">
	import './css/style.css'
	import { Footer, Header } from '$lib'
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'
</script>

<div class="container">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.container {
		padding: var(--padding-md);
		max-width: 740px;
		margin: 0 auto;
	}
</style>

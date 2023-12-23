<script lang="ts">
	import './css/style.css'
	import { onMount } from 'svelte'
	import { Footer, Header } from '$lib'
	import { page } from '$app/stores'

	let path
	onMount(() => {
		path = $page?.url.pathname
	})
	console.log('Path: ', path)
	const me = path === '/blog' ? false : true
	console.log('Me: ', me)
</script>

<div class="container">
	<Header {me} />

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

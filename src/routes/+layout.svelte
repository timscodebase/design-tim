<script lang="ts">
	import './css/style.css'
	import { onMount } from 'svelte'
	import { Footer, Header } from '$lib'
	import { page } from '$app/stores'
	import { description, url, name } from '$lib/config'

	let path
	onMount(() => {
		path = $page?.url.pathname
	})
</script>

<svelte:head>
	<title>{name}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={description} />
	<meta name="author" content={description} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#000000" />
	<meta name="twitter:card" content={`${name}: ${description}`} />
	<meta name="twitter:site" content="@timsmith23" />
	<meta name="twitter:creator" content="@timsmith23" />
	<meta property="og:title" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:description" content="My Portfolio" />
	<meta property="og:site_name" content="My Portfolio" />
	<meta
		property="og:image"
		content="%sveltekit.assets%/images/banners/design-tim-genearal-banner.png"
	/>
	<link rel="icon" type="image/png" href="%sveltekit.assets%/favicon.png" />
	<link rel="apple-touch-icon" href="%sveltekit.assets%/images/apple-icon.png" />
	<link rel="canonical" href={url} />
</svelte:head>

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
		overflow: hidden;
	}
</style>

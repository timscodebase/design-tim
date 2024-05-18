<script lang="ts">
	import '$css/style.css'
	import { onMount } from 'svelte'
	import { Analytics, Footer, Header } from '$lib'
	import { page } from '$app/stores'
	import { description, name, url } from '$lib/config'
	import favicon from '$lib/assets/favicon.png'
	import ogImage from '$lib/assets/ogImage.png'
	import appleIcon from '$lib/assets/apple-icon.png'
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'
	import { onNavigate } from '$app/navigation'

	onNavigate((navigation) => {
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})

	injectSpeedInsights()

	let path: string
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
	<meta property="og:url" content="https://timsmith.tech" />
	<meta property="og:description" content={`${name}: ${description}`} />
	<meta property="og:site_name" content={`${name}: ${description}`} />
	<meta property="og:image" content={`${url}${ogImage}`} />
	<link rel="icon" type="image/png" href={favicon} />
	<link rel="apple-touch-icon" href={appleIcon} />
	<link rel="canonical" href="https://timsmith.tech" />
</svelte:head>

<div id="wrapper" class="container">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<Analytics />

<style>
	.container {
		padding: var(--padding-md);
		max-width: 740px;
		margin: 0 auto;
		overflow: clip;
	}

	:global(#wrapper) {
		height: 100%;
		overflow: clip;
		view-timeline-name: --section-pin-tl;
		view-timeline-axis: block;
	}
</style>

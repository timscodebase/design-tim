<script lang="ts">
	import type { PageData } from '$lib/types'
	import { onMount } from 'svelte'
	import ImageGallery from '@react2svelte/image-gallery'

	export let data: PageData
	const { photos } = data

	let width = 0

	onMount(() => {
		width = window.innerWidth
	})
</script>

<svelte:head>
	<title>Tim Smith Photos</title>
	<link rel="canonical" href="https://timsmith.tech" />
	<meta name="description" content="I love photography. Here are some of my favourite photos." />
</svelte:head>

<h2>Photos</h2>

{#if width > 500}
	<ImageGallery items={photos} lazyLoad={true} showPlayButton={false} showBullets={true} />
{:else}
	<ImageGallery
		items={photos}
		lazyLoad={true}
		showPlayButton={false}
		showBullets={true}
		showNav={false}
	/>
{/if}

<style>
</style>

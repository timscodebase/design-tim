<script lang="ts">
	import { formatDate } from '$lib/utils'
	import { Link, Tags } from '$lib'
	import { ogStore } from '$stores'

	import { page } from '$app/stores'
	const data = $page.data

	$ogStore.banner = data.meta.image
	$ogStore.name = data.meta.title
</script>

<!-- SEO -->
<svelte:head>
	<meta property="og:type" content="article" />
</svelte:head>

{#if data.meta.image}
	<img src={data.meta.image} alt={data.meta.title} style={`--image: ${data.meta.title}`} />
{/if}

<article>
	<!-- Title -->
	<hgroup>
		<h1 style={`--title: ${data.meta.title}`}>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<!-- Tags -->
	<Tags categories={data.meta.categories} />

	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>

	<Link href="/blog">Back to blog</Link>
</article>

<style>
	img {
		view-transition-name: var(--image);
	}
	h1 {
		color: var(--text);
		view-transition-name: var(--title);
	}
	p {
		padding: var(--padding-sm) 0;
	}
</style>

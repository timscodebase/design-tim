<script lang="ts">
	import { formatDate } from '$lib/utils'
	import { Link, Tags } from '$lib'

	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<link rel="canonical" href="https://timsmith.tech" />
	<meta name="description" content={data.meta.description} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
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

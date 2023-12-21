<script lang="ts">
	import { formatDate } from '$lib/utils'
	import { Link, Tags } from '$lib'

	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
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
	h1 {
		color: var(--primary-2);
	}
	p {
		padding: var(--padding-sm) 0;
	}
</style>

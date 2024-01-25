<script lang="ts">
	import { formatDate } from '$lib/utils'
	import { Tags } from '$lib'

	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content={data.meta.image} />
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

	<a href="/blog" data-sveltekit-preload-data>
		<iconify-icon class="svg" icon="icon-park-twotone:left-two" /> Back to blog
	</a>
</article>

<style>
	a {
		width: 185px;
		color: var(--primary);
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		text-decoration: underline;
		font-size: 1.2rem;

		&:hover {
			color: var(--primary-2);
		}
	}
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

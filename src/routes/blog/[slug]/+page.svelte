<script lang="ts">
	import { formatDate } from '$lib/utils'
	import { Tags } from '$lib'

	import { page } from '$app/stores'
</script>

<!-- SEO -->
<svelte:head>
	<title>{$page.data.meta.title}</title>
	<meta name="description" content={$page.data.meta.description} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={$page.data.meta.title} />
	<meta property="og:description" content={$page.data.meta.description} />
	<meta property="og:image" content={$page.data.meta.image} />
</svelte:head>

{#if $page.data.meta.image}
	<img
		src={$page.data.meta.image}
		alt={$page.data.meta.title}
		style={`--image: ${$page.data.meta.title}`}
	/>
{/if}

<article>
	<!-- Title -->
	<hgroup>
		<h1 style={`--title: ${$page.data.meta.title}`}>{$page.data.meta.title}</h1>
		<p>Published at {formatDate($page.data.meta.date)}</p>
	</hgroup>

	<!-- Tags -->
	<Tags categories={$page.data.meta.categories} />

	<!-- Post -->
	<div class="prose">
		<svelte:component this={$page.data.content} />
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
	ul {
		list-style: disc !important;
	}
</style>

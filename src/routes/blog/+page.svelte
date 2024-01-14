<script lang="ts">
	import { formatDate } from '$utils'
	import * as config from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				{#if post.thumb}
					<a href={`blog/${post.slug}`}>
						<img src={post.thumb} alt={post.title} style={`--image: ${post.title}`} />
						<h2 style={`--title: ${post.title}`}>{post.title}</h2>
					</a>
				{/if}
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	img {
		view-transition-name: var(--image);
	}
	h2 {
		display: block;
		font-size: 3svw;
		cursor: pointer;
		color: var(--primary);
		margin-bottom: var(--margin-sm);
		view-transition-name: var(--title);
	}
	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.post {
		padding: var(--padding-md);
		margin: var(--margin-md) 0;
		border: var(--border-base);
	}
	.post:hover {
		border: var(--border-hover);
	}
	.post:hover > .title {
		color: var(--text);
	}
</style>

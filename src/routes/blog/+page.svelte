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
				<a href={`blog/${post.slug}`} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
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

	.title {
		display: block;
		font-size: 3svw;
		cursor: pointer;
		color: var(--primary);
		margin-bottom: var(--margin-sm);
	}
</style>

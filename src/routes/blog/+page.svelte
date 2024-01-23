<script lang="ts">
	import type { PageData } from './$types'
	import { formatDate } from '$utils'

	let { data } = $props<PageData>()
</script>

<svelte:head>
	<title>Tim Smith Blog</title>
	<link rel="canonical" href="https://timsmith.tech" />
	<meta name="description" content="This is my blog. It's a work in progress." />
</svelte:head>

<h2>Blog</h2>
<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				{#if post.thumb}
					<a href={`blog/${post.slug}`}>
						<img
							src={post.thumb}
							alt="thumbnail image of the author"
							style={`--image: ${post.title}`}
						/>
						<h3 style={`--title: ${post.title}`}>{post.title}</h3>
					</a>
				{:else}
					<h3 style={`--title: ${post.title}`}>{post.title}</h3>
				{/if}
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	a {
		display: grid;
		place-items: center;
	}
	img {
		view-transition-name: var(--image);
	}
	h3 {
		display: block;
		cursor: pointer;
		color: var(--text);
		margin-bottom: var(--margin-sm);
		view-transition-name: var(--title);
	}

	.date {
		color: var(--primary);
	}
	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.post {
		display: grid;
		place-content: center;
		padding: var(--padding-md);
		margin: var(--margin-md) 0;
		/* border: var(--border-base); */
	}
	.post:hover {
		/* border: var(--border-hover); */
	}
	.post:hover > .title {
		color: var(--text);
	}
</style>

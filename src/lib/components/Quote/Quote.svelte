<script>
	import { fly } from 'svelte/transition'
	import { Button, Star } from '$lib'
	import { onMount } from 'svelte'

	let isStar = false

	let quote = {
		content: 'You are loved.',
		author: 'Me ❤️'
	}

	let isCopied = false

	async function fetchQuote() {
		try {
			const res = await fetch('https://api.quotable.io/random')
			const data = await res.json()
			quote = data
		} catch (err) {
			console.error(err)
		}
	}

	onMount(fetchQuote)

	setInterval(fetchQuote, 15000)

	async function copyQuote() {
		try {
			await navigator.clipboard.writeText(`${quote.content} - ${quote.author}`)
			isCopied = true
			setTimeout(() => {
				isCopied = false
			}, 1500)
		} catch (err) {
			console.error('Failed to copy: ', err)
		}
	}
</script>

<section>
	<p class="resizeable">Words to live by:</p>
	<figure>
		<blockquote>
			<p>{quote.content}</p>
		</blockquote>

		<figcaption>- {quote.author}</figcaption>
	</figure>

	<div style:position="relative">
		{#if isStar}
			<div class="star" out:fly={{ opacity: 0, y: -100, duration: 3000 }}>
				<Star />
			</div>
		{/if}
		<Button on:click={copyQuote}>
			{isCopied ? 'Copied!' : 'Copy quote'}
		</Button>
	</div>
</section>

<style>
	p {
		padding: 0;
		padding-bottom: var(--padding-sm);
		font-weight: bolder;
	}
	section {
		min-height: 24svh;
	}

	figure {
		position: relative;
		transition: all 0.3s ease;
	}
	.star {
		position: absolute;
		top: 0;
		right: 100px;
	}
	blockquote {
		color: var(--primary-2);
	}

	figcaption {
		color: color-mix(in srgb, var(--purple), var(--text) 70%);
		font-weight: bolder;
		padding-bottom: var(--padding-lg);
	}
</style>

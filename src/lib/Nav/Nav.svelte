<script lang="ts">
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import { Button } from '$lib'

	let open: boolean

	onMount(() => {
		open = false
	})

	function toggleNav() {
		open = !open
	}

	function handleNav(href: string) {
		goto(href)
		toggleNav()
	}
</script>

<nav>
	<Button buttonType="round" on:click={toggleNav}>{open ? 'Close' : 'Open'} Nav</Button>
	<ul class:open>
		<li><Button on:click={() => handleNav('/')}>Home</Button></li>
		<li><Button on:click={() => handleNav('/projects')}>Projects</Button></li>
		<li><Button on:click={() => handleNav('/past-work')}>Past Work</Button></li>
		<li><Button on:click={() => handleNav('/Blog')}>Blog</Button></li>
		<li><Button on:click={() => handleNav('/Uses')}>Uses</Button></li>
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		top: 2rem;
		right: 2rem;
		display: grid;
		gap: var(--gap);
	}

	ul {
		height: 0;
		overflow: hidden;
		transition: transform 0.3s ease-in-out;
	}

	ul.open {
		display: grid;
		gap: var(--gap);
		height: auto;
	}

	li {
		margin-left: auto;
	}
</style>

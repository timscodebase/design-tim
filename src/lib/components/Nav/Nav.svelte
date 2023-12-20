<script lang="ts">
	import { goto } from '$app/navigation'
	import { Button } from '$lib'
	import SVG from './SVG.svelte'
	import { navColor, navStore } from '$stores'

	// $: {
	// 	console.log('navStore', navStore)
	// }

	function handleNav(url: string) {
		navStore.toggle()
		goto(url)
	}
</script>

<nav>
	<Button on:click={navStore.toggle}>
		{#if $navStore}
			<SVG icon="close" />
		{:else}
			<SVG icon="open" />
		{/if}
	</Button>
	<ul class:open={$navStore} class={`${$navColor}`}>
		<li>
			<Button btnRole="link" on:click={() => handleNav('/')}>Home</Button>
		</li>
		<li>
			<Button btnRole="link" on:click={() => handleNav('/projects')}>Projects</Button>
		</li>
		<li>
			<Button btnRole="link" on:click={() => handleNav('/jobs')}>Jobs</Button>
		</li>
		<li>
			<Button btnRole="link" on:click={() => handleNav('/skills')}>Skills</Button>
		</li>
		<li>
			<Button btnRole="link" on:click={() => handleNav('/blog')}>Blog</Button>
		</li>
		<li>
			<Button btnRole="link" on:click={() => handleNav('/uses')}>Uses</Button>
		</li>
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		top: 1rem;
		right: 1rem;
		display: grid;
		z-index: 9999;
	}

	ul {
		height: 0;
		overflow: hidden;
		margin: 0;
		transition: transform 0.3s ease-in-out;
		background: var(--trans-background);
		font-family: var(--body-font-family);
		border: none !important;
	}

	ul.open {
		display: grid;
		gap: var(--gap);
		height: auto;
		padding: var(--padding-md);
	}

	li {
		margin-left: auto;
	}
</style>

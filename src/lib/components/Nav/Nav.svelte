<script lang="ts">
	import { goto } from '$app/navigation'
	import { Button } from '$lib'
	import { navColor, navStore } from '$stores'

	function handleNav(url: string) {
		navStore.toggle()
		goto(url)
	}
</script>

<nav>
	<Button btnClass={$navStore ? 'open' : ''} on:click={navStore.toggle}
		>{$navStore ? 'Close' : 'Open'} Nav</Button
	>
	<ul class:open={$navStore} class={`${$navColor}`}>
		<li>
			<Button btnRole="link" on:click={() => handleNav('/')}>Home</Button>
		</li>
		<li>
			<Button btnRole="link" on:click={() => handleNav('/projects')}>Projects</Button>
		</li>
		<li>
			<Button btnRole="link" on:click={() => handleNav('/skills')}>Skills</Button>
		</li>
		<li>
			<Button btnRole="link" on:click={() => handleNav('/past-work')}>Past Work</Button>
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
		gap: 2px;
	}

	ul {
		height: 0;
		overflow: hidden;
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

	button.open {
		color: var(--primary);
		border-color: var(--border-hover);
	}

	li {
		margin-left: auto;
	}
</style>

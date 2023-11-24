<script lang="ts">
	import { Button } from '$lib'
	let open = false

	function toggleNav() {
		open = !open
	}
</script>

<nav>
	<Button on:click={toggleNav}>+</Button>
	<ul class:open>
		<li><a href="/">Home</a></li>
		<li><a href="/projects">Projects</a></li>
		<li><a href="past-work">Past Work</a></li>
		<li><a href="/blog">Blog</a></li>
		<li><a href="/uses">Uses</a></li>
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		top: 2rem;
		right: 2rem;
		width: 150px;
	}

	ul {
		height: 0;
		overflow: hidden;
		transition: transform 0.3s ease-in-out;
	}

	ul.open {
		height: auto;
	}
</style>

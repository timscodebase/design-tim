<script lang="ts">
	import { goto } from '$app/navigation'
	import { Button } from '$lib'
	import SVG from './SVG.svelte'
	import { navColor } from '$stores'
</script>

<nav>
	<ul class={`${$navColor}`}>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="projects">Projects</a>
		</li>
		<li>
			<a href="jobs">Jobs</a>
		</li>
		<li>
			<a href="skills">Skills</a>
		</li>
		<!-- <li>
			<a href='blog'>blog</a>
		</li> -->
		<li>
			<a href="uses">Uses</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		top: 1rem;
		right: 16svw;
		display: grid;
		z-index: 9999;
	}

	ul {
		display: grid;
		height: auto;
		gap: calc(var(--gap) / 2);
		padding-bottom: var(--padding-lg);
		font-family: var(--body-font-family);
		border: none !important;
	}

	li {
		margin-left: auto;
		text-decoration: underline;
		text-decoration-color: var(--primary);
	}

	@media (max-width: 1400px) {
		nav {
			position: relative;
			grid-column: 1/-1;
			top: initial;
			right: initial;
			font-size: 1.5rem;
		}

		ul {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			align-items: center;
			color: var(--yellow);
		}
		li {
			margin-left: initial !important;
		}
	}

	@media (max-width: 450px) {
		nav {
			font-size: 1.75rem;
		}
	}

	li {
		margin-left: auto;
	}
</style>

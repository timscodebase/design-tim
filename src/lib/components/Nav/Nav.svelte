<script lang="ts">
	import { Link } from '$lib'
	import { navColor } from '$stores'
</script>

<nav>
	<ul class={`${$navColor}`}>
		<li>
			<Link href="/">Home</Link>
		</li>
		<li>
			<Link href="/projects">Projects</Link>
		</li>
		<li>
			<Link href="/jobs">Jobs</Link>
		</li>
		<li>
			<Link href="/skills">Skills</Link>
		</li>
		<li>
			<Link href="/photos">Photos</Link>
		</li>
		<li>
			<Link href="/uses">Uses</Link>
		</li>
		<li>
			<Link href="/blog">Blog</Link>
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
		padding-top: var(--padding-lg);
		padding-bottom: var(--padding-lg);
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
		text-underline-offset: 2px;
		text-decoration-thickness: 2px;
	}

	@media (max-width: 1000px) {
		nav {
			position: relative;
			grid-column: 1/-1;
			top: initial;
			right: initial;
			font-size: 1.5rem;
			margin-top: 0;
			padding-bottom: 0;
			padding-top: 0;
		}

		ul {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
			grid-gap: 1rem;
			place-items: center;
		}
		li {
			margin-left: initial !important;
			color: var(--yellow);
			text-decoration-color: var(--pink);
			text-underline-offset: 3px;
			text-decoration-thickness: 4px;
			text-align: center;
		}
		li.active {
			background: var(--primary-2);
			color: var(--reverse-text);
			padding: 5px 10px;
			view-transition-name: active-page;
		}
		a {
			font-size: clamp(1.25rem, 1.75svw, 2rem);
		}
	}

	@media (max-width: 500px) {
		ul {
			display: grid;
			gap: 0;
			grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
			font-size: 1.1rem;
			text-align: center;
		}

		li {
			display: flex;
			justify-content: center;
		}
	}
</style>

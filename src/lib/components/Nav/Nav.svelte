<script lang="ts">
	import { navColor } from '$stores'
	import { page } from '$app/stores'

	let path: string = '/'

	function onclick() {
		path = $page.url.pathname
		console.log(path)
	}
</script>

<nav>
	<ul class={`${$navColor}`}>
		<li>
			<button
				{onclick}
				class:active={path === '/' ? true : false}
				aria-current={path === '/' ? 'page' : 'false'}
				href="/">Home</button
			>
		</li>
		<li>
			<button
				{onclick}
				class:active={path === '/projects' ? true : false}
				aria-current={path === '/projects' ? 'page' : 'false'}
				href="/projects">Projects</button
			>
		</li>
		<li>
			<button
				{onclick}
				class:active={path === '/jobs' ? true : false}
				aria-current={path === '/jobs' ? 'page' : 'false'}
				href="/jobs">Jobs</button
			>
		</li>
		<li>
			<button
				{onclick}
				class:active={path === '/skills' ? true : false}
				aria-current={path === '/skills' ? 'page' : 'false'}
				href="/skills">Skills</button
			>
		</li>
		<li>
			<button
				{onclick()}
				class:active={path === '/uses' ? true : false}
				aria-current={path === '/uses' ? 'page' : 'false'}
				href="/uses">Uses</button
			>
		</li>
		<li>
			<button
				{onclick}
				class:active={path === '/blog' ? true : false}
				aria-current={path === '/blog' ? 'page' : 'false'}
				href="/blog">Blog</button
			>
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

	.active {
		background: var(--primary-2);
		color: var(--reverse-text);
		padding: 3px 5px;
		view-transition-name: active-page;
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

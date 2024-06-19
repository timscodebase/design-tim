<script lang="ts">
	import { page } from '$app/stores'
	import { navColor } from '$stores'
	import { Link } from '$lib'

	const links = [
		{ name: 'Home', href: '/', external: false },
		{ name: 'Projects', href: '/projects', external: false },
		{ name: 'Resume', href: '/resume', external: false },
		{ name: 'Uses', href: '/uses', external: false },
		{ name: 'Blog', href: '/blog', external: false }
	]

	let navEl: HTMLElement | null = null
	function isScrolling(distance = 300) {
		let pastScrollY = window.scrollY
		window.addEventListener('scroll', () => {
			let currentScrollY = window.scrollY
			let scrollDistance = Math.abs(currentScrollY - pastScrollY)
			if (window.innerWidth >= 1000) {
				if (currentScrollY > pastScrollY && scrollDistance >= distance) {
					navEl?.classList.add('is-hidden')
				} else if (currentScrollY < pastScrollY && scrollDistance >= distance) {
					navEl?.classList.remove('is-hidden')
				}
			}
		})
		return 'up'
	}
</script>

<svelte:window on:scroll={() => isScrolling(300)} />
<nav bind:this={navEl}>
	<ul class={`${$navColor}`}>
		{#each links as { name, href, external }}
			<li aria-current={$page.route.id === href ? 'page' : undefined}>
				<Link {href} {external}>{name}</Link>
			</li>
		{/each}
		<li>
			<Link className="ei" external href="https://www.websitecarbon.com/website/timsmith-tech/">EI</Link>
		</li>
	</ul>
</nav>

<style>
	.is-hidden {
		transform: translateX(120%);
	}
	nav {
		position: fixed;
		top: 1rem;
		right: 1rem;
		display: grid;
		z-index: 9999;
		padding-top: var(--padding-lg);
		padding-bottom: var(--padding-lg);
		transition: transform 0.3s ease;
	}
	ul {
		display: grid;
		height: auto;
		gap: calc(var(--gap) / 2);
		padding-bottom: var(--padding-lg);
		font-family: var(--body-font-family);
		border: none !important;
		margin-top: 7rem;
	}
	li {
		margin-left: auto;
		text-decoration: underline;
		text-decoration-color: var(--primary);
		text-underline-offset: 2px;
		text-decoration-thickness: 2px;
		&[aria-current='page'] {
			view-transition-name: active-page;
		}
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
	}
	@media (max-width: 500px) {
		ul {
			display: grid;
			gap: 0;
			grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
			font-size: 1.1rem;
			text-align: center;
		}
		li {
			display: flex;
			justify-content: center;
		}
	}
	[aria-current='page'] {
		background: var(--primary-2);
		color: #000;
		padding: 1px 2px;
		border-radius: 6px;
		view-transition-name: active-page;
	}
</style>

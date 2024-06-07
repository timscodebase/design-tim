<script lang="ts">
	import { page } from '$app/stores'
	import { navColor } from '$stores'
	import { Link } from '$lib'
  import { onMount } from'svelte'

	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'Resume', href: '/resume' },
		{ name: 'Uses', href: '/uses' },
		{ name: 'Blog', href: '/blog' }
	]

  onMount(() => {
    const dialog = document.querySelector("dialog") as HTMLDialogElement
    const selfie_open_btn = document.getElementById("selfie_open_btn") as HTMLButtonElement
    const selfie_close_btn = document.querySelector(".selfie_close_btn") as HTMLButtonElement

    if (window.innerWidth < 1000) {
      selfie_open_btn?.classList.remove("visually-hidden");
      selfie_open_btn?.addEventListener("click", () => dialog.showModal())
      selfie_close_btn?.addEventListener("click", () => dialog.close())
    }
  })

	let navEl: HTMLElement | null = null
	function isScrolling(distance = 300) {
		const pastScrollY = window.scrollY
		window.addEventListener('scroll', () => {
			const currentScrollY = window.scrollY
			const scrollDistance = Math.abs(currentScrollY - pastScrollY)
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
		{#each links as { name, href }}
			<li aria-current={$page.route.id === href ? 'page' : undefined}>
				<Link {href}>{name}</Link>
			</li>
		{/each}
    <dialog>
      <button class="selfie_close_btn" autofocus>Close</button>
      <label for="selfie">Selfie</label>
      <input name="selfie" id="selfie" type="file" accept="image/*" capture="user">
      <label for="picture">Picture</label>
      <input name="picture" id="picture" type="file" accept="image/*" capture="environment" />
    </dialog>
    <button id="selfie_open_btn" class="visually-hidden">Take a Selfie</button>
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
  dialog {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--black-75);
    z-index: 999999;
  }
	ul {
    position: relative;
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

<script lang="ts">
	import { Link } from '$lib'
</script>

<svelte:head>
	<title>Contact Tim Smith</title>
	<link rel="canonical" href="https://design-tim.vercel.app/" />
	<meta name="description" content="Contact Tim Smith" />
</svelte:head>

<h2>Find Me On</h2>

<div class="socials">
	<div>
		<Link href="https://twitter.com/timsmith23" external>
			<iconify-icon icon="simple-icons:x" />
			<p>@tismith23</p>
		</Link>
	</div>
	<div>
		<Link href="https://www.linkedin.com/in/timsmith25/" external>
			<iconify-icon icon="simple-icons:linkedin" />
			<p>/timsmith25</p>
		</Link>
	</div>
	<div>
		<Link href="https://github.com/timscodebase" external>
			<iconify-icon icon="simple-icons:github" />
			<p>/timscodebase</p>
		</Link>
	</div>
	<div>
		<Link href="https://github.com/webruin" external>
			<iconify-icon icon="simple-icons:github" />
			<p>/webruin</p>
		</Link>
	</div>
	<div>
		<Link href="https://codepen.io/WebRuin" external>
			<iconify-icon icon="simple-icons:codepen" />
			<p>/WebRuin</p>
		</Link>
	</div>
	<div>
		<a href="tel:415-694-3568">
			<iconify-icon icon="mdi:phone-classic" />
			<p>415-694-3568</p></a
		>
	</div>
	<div>
		<a href="mailto:tim.smith.hdg@gmail.com">
			<iconify-icon icon="mdi:email" />
			<p>tim.smith.hdg@gmail.com</p>
		</a>
	</div>
</div>

<address>
	<p>Tim Smith</p>
	<p>1797 NW Civic Drive</p>
	<p>Gresham, OR 97030</p>
</address>

<style>
	address {
		text-align: center;
		padding: 5svh 0;
	}
	p {
		font-size: clamp(1.25rem, 1.5svw, 1.75rem);
	}

	iconify-icon {
		display: inline-block;
		width: 2rem;
		height: 2rem;
		color: var(--primary-2);
		font-size: clamp(1.5rem, 1.75svw, 2.25rem);
	}

	.socials {
		display: flex;
		flex-wrap: wrap;
		place-content: center;
		gap: var(--gap);
	}

	.socials > div > a {
		display: grid;
		place-items: center;
		grid-template-columns: 2.5rem 1fr;
	}
</style>

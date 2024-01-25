<script>
	import { ContactMe, Link } from '$lib'
</script>

<footer>
	<div>
		<p>Tim Smith {new Date().getFullYear()}</p>
	</div>
	<div>
		<Link href="https://github.com/timscodebase" external>Github</Link>
		<Link href="https://linkedin.com/in/timsmith25" external>LinkedIn</Link>
	</div>
	<div>
		<Link href="/contact-me">Contact Me</Link>
	</div>
</footer>

<style>
	footer {
		display: grid;
		place-items: center;
		margin-top: var(--margin-md);
		grid-template-columns: auto 1fr auto;
		/* border: var(--border-primary); */
		padding: var(--padding-sm);
		gap: var(--gap);
	}

	@media (max-width: 500px) {
		footer {
			grid-template-columns: 1fr;
			gap: 0;
		}
	}

	footer * {
		display: flex;
		place-content: center;
		gap: var(--gap);
	}

	button:hover {
		background-color: var(--color-primary-dark);
	}

	.textarea {
		grid-column: 1 / -1;
	}

	p {
		color: var(--primary-2);
		font-weight: bold;
	}
</style>

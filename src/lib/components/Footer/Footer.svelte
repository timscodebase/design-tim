<script>
	import { Link, FindMeOn } from '$lib'
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
		<a href="https://ko-fi.com/T6T5VLU5D" target="_blank"
			><img
				height="36"
				style="border:0px;height:36px;"
				src="https://storage.ko-fi.com/cdn/kofi5.png?v=3"
				alt="Buy Me a Coffee at ko-fi.com"
			/></a
		>
	</div>
</footer>

<style>
	footer {
		display: grid;
		place-items: center;
		margin-top: var(--margin-md);
		grid-template-columns: auto 1fr auto;
		border-top: 1px dashed var(--text);
		padding: var(--padding-lg) 0;
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

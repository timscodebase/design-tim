<script>
	import { ContactMe, Link, Modal } from '$lib'
	import { showModal } from '$stores'
	import { toggleModal } from '$utils'
</script>

<footer>
	<div class="left">
		<button on:click={toggleModal}>Contact Me</button>

		<Modal bind:showModal={$showModal}>
			<ContactMe />
		</Modal>
	</div>
	<div class="center">
		<p>Tim Smith {new Date().getFullYear()}</p>
	</div>
	<div class="right">
		<Link href="https://github.com/timscodebase" className="github" external={true}>Github</Link>
		<Link href="https://linkedin.com/in/timsmith25" className="linkedin" external={true}
			>LinkedIn</Link
		>
	</div>
</footer>

<style>
	footer {
		height: 100px;
		display: grid;
		place-items: center;
		margin-top: var(--margin-md);
		grid-template-columns: 1fr 1fr 1fr;
		border: var(--border-primary);
		padding: var(--padding-md);
		gap: var(--gap);
	}

	@media (max-width: 500px) {
		footer {
			height: auto;
			grid-template-columns: 1fr;
			gap: 0;
		}
	}

	footer * {
		display: flex;
		place-content: center;
		gap: 10px;
	}

	.right {
		background: var(--trans-background);
	}

	button:hover {
		background-color: var(--color-primary-dark);
	}

	.textarea {
		grid-column: 1 / -1;
	}
</style>

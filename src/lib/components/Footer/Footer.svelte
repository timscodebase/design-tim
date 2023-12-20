<script>
	import { Link, Modal } from '$lib'
	let showModal = false

	const toggleModal = () => (showModal = !showModal)
</script>

<footer>
	<div class="left">
		<button on:click={toggleModal}>Contact Me</button>

		<Modal bind:showModal>
			<h2 slot="header">Contact Me</h2>

			<form action="">
				<label>
					Name
					<input type="text" />
				</label>
				<label>
					Email
					<input type="email" />
				</label>
				<label class="textarea">
					Message
					<textarea />
				</label>
				<button type="submit" on:click={toggleModal}>Send</button>
			</form>
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
		place-content: center;
		margin-top: var(--margin-md);
		grid-template-columns: 1fr 1fr 1fr;
		border: var(--border-primary);
		padding: var(--padding-md);
		gap: var(--gap);
	}

	@media (max-width: 500px) {
		footer {
			height: 160px;
			grid-template-columns: 1fr;
			gap: 0;
		}
	}

	footer * {
		display: flex;
		place-content: center;
		gap: 10px;
	}

	form {
		display: flex;
		flex-wrap: wrap;
		grid-template-columns: 1fr 1fr;
	}

	label {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	input,
	textarea {
		padding: var(--padding-sm);
		border: var(--border-primary);
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

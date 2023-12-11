<script>
	import { Modal } from '$lib'
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
		<a href="https://github.com/timscodebase" target="_blank" rel="noopener">Github</a>
		<a href="https://linkedin.com/in/timsmith25" target="_blank" rel="noopener">LinkedIn</a>
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
	}

	footer * {
		display: flex;
		place-content: center;
		gap: 10px;
	}

	form {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	label {
		display: flex;
		flex-direction: column;
	}

	input,
	textarea {
		padding: var(--padding-sm);
		border: var(--border-primary);
	}

	/* button {
		padding: var(--padding-sm);
		border: var(--border-primary);
		background-color: var(--color-primary);
		color: var(--color-white);
		cursor: pointer;
	} */

	button:hover {
		background-color: var(--color-primary-dark);
	}

	.textarea {
		grid-column: 1 / -1;
	}
</style>

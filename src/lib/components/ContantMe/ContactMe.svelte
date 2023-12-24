<script lang="ts">
	import { Button } from '$lib'
	import { toggleModal } from '$utils'
</script>

<h2>Contact Me</h2>

<form on:submit={toggleModal}>
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
	<!-- H o n e y p o t -->
	<label class="ohnohoney" for="name" />
	<input
		class="ohnohoney"
		autocomplete="off"
		type="text"
		id="name"
		name="name"
		placeholder="Your name here"
	/>
	<label class="ohnohoney" for="email" />
	<input
		class="ohnohoney"
		autocomplete="off"
		type="email"
		id="email"
		name="email"
		placeholder="Your e-mail here"
	/>
	<Button buttonType="submit">Send</Button>
</form>

<style>
	.ohnohoney {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		height: 0;
		width: 0;
		z-index: -1;
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
</style>

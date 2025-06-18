<script lang="ts">
</script>

<h2>Contact Me</h2>

<form on:submit|preventDefault={handleSubmit}>
	<label for="name">
		<span>Name</span>
	</label>
	<input type="text" name="name" aria-label="name" placeholder="Enter your name" required />
	<label for="email">
		<span>Email</span>
	</label>
	<input type="email" name="email" aria-label="email" placeholder="bill@hotmail.com" required />
	<label for="message">
		<span>Message</span>
	</label>
	<textarea name="message" aria-label="name" placeholder="Message" required rows="3"></textarea>
	<label for="honeypot" class="ohnohoney">
		<span>Leave this field empty</span>
	</label>
	<input type="submit" />
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

<script lang="ts">
	let open = false
</script>

<button class:open class="resizeable" on:click>
	<slot />
</button>

<style>
	button {
		--size: 65px;
		color: var(--text);
		text-align: center;
		min-width: var(--size);
		min-height: var(--size);
		padding: var(--padding-sm);
		border: var(--border-base);
	}
	button.open,
	button:hover,
	button:active {
		color: var(--primary);
		border-color: var(--border-hover);
	}
</style>

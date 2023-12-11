<script lang="ts">
	export let showModal: boolean
	export let showCloseButton: boolean = false

	let dialog: HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal()
</script>

<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<div role="dialog" on:click|stopPropagation>
		<slot name="header" />
		<hr />
		<slot />
		<hr />
		{#if showCloseButton}
			<button on:click={() => dialog.close()}>close modal</button>
		{/if}
	</div>
</dialog>

<style>
	dialog {
		position: fixed;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		background-color: var(--trans-background);
		border: var(--border-primary);
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>

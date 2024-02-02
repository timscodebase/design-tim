<script lang="ts">
  import { goto } from `$app/navigation`
  const { to = '/' } = $props<{ to: string }>()

  function onclick() {
    goto(to)
  }
</script>

<button {onclick}>
	<slot />
</button>

<style>
	button {
		/* remove default button styles */
		background: none;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;

		display: flex;
		gap: 5px;
		align-items: center;
		cursor: pointer;
		font-weight: bold;
		text-decoration: underline;
		font-size: var(--body-font-family);
		word-break: break-word;
	}
</style>

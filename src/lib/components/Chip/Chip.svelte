<script lang="ts">
	const { liClass } = $props<{ liClass: string }>()
</script>

<li class={liClass}>
	<slot />
</li>

<style>
	li {
		display: block;
		padding: 1px 2px;
		border-radius: 6px;
		color: var(--reverse-text);
		outline: var(--background) 2px solid;
	}

	.frontend {
		--color: color-mix(in srgb, var(--yellow), var(--text) 50%);
		background: var(--color);
		box-shadow: 0 0 0 0px var(--background), 0 0 0 4px var(--color);
	}

	.backend {
		background: color-mix(in srgb, var(--blue), var(--text) 50%);
		border: 2px solid var(--blue);
	}

	.fullstack {
		background: color-mix(in srgb, var(--green), var(--text) 50%);
	}

	.devops {
		background: color-mix(in srgb, var(--orange), var(--text) 50%);
	}

	.methodology {
		background: color-mix(in srgb, var(--pink), var(--text) 50%);
	}

	.design {
		background: color-mix(in srgb, var(--purple), var(--text) 50%);
	}
</style>

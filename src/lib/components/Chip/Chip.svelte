<script lang="ts">
	const { liClass } = $props<{ liClass: string }>()
</script>

<li class={liClass}>
	<slot />
</li>

<style>
	li {
		padding: var(--padding-xs) var(--padding-sm);
		border-radius: 6px;
		color: var(--reverse-text);
		border: 4px solid var(--background), 2px solid var(--yellow);
	}

	.frontend {
		background: color-mix(in srgb, var(--yellow), var(--text) 50%);
		border: 4px solid var(--background), 2px solid var(--yellow);
	}

	.backend {
		background: color-mix(in srgb, var(--blue), var(--text) 50%);
		border: 4px solid var(--background), 2px solid var(--blue);
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

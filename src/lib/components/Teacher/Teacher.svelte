<script lang="ts">
	import { Link } from '$lib'
	import type { TeacherType } from '$lib/types'
	export let teacher: TeacherType

	const { name, url } = teacher
</script>

<div class="teacher">
	<p>{name}</p>
	<a href={url} target="_blank" rel="noopener">
		{url}
	</a>
</div>

<style>
	.teacher {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--padding-sm);
		border: var(--border-primary);
		color: color-mix(in srgb, var(--purple), var(--text) 50%);
		font-weight: bold;

		p {
			padding: 0;
		}

		a {
			color: var(--text);
			text-decoration: underline;
			cursor: pointer;
		}
	}

	.teacher:nth-child(odd) {
		color: color-mix(in srgb, var(--yellow), var(--text) 50%);
		border: var(--border-primary-2);
	}
</style>

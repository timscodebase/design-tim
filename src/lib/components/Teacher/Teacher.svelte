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
		color: var(--primary-2);
		border: var(--border-primary-2);
		padding: var(--padding-sm);

		p {
			padding: 0;
		}

		a {
			color: var(--text);
			text-decoration: underline;
			cursor: pointer;
		}
	}
</style>

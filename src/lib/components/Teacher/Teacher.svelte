<script lang="ts">
	import type { TeacherType } from '$lib/types'
	const { teacher } = $props() as { teacher: TeacherType }
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
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		color: var(--primary-2);
		font-weight: 700;
		font-family: var(--header-font-family);
		font-size: clamp(1.2rem, 1.75svw, 1.5rem);

		p {
			padding: 0;
			font-size: inherit;
		}

		a {
			color: var(--text);
			text-decoration: underline;
			cursor: pointer;
			font-weight: 400;
		}
	}

	@media (max-width: 500px) {
		.teacher {
			flex-direction: column;
			align-items: flex-start;
		}
	}

	.teacher:nth-child(odd) {
		color: var(--primary);
	}
</style>

<script lang="ts">
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
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		color: color-mix(in srgb, var(--purple), var(--text) 60%);
		font-weight: bolder;
		font-family: var(--header-font-family);
		font-size: clamp(1.5rem, 2.5svw, 2rem);

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
		color: color-mix(in srgb, var(--yellow), var(--text) 60%);
	}
</style>

<script lang="ts">
	import { Link } from '$lib'
</script>

<h3>Also find me on:</h3>

<ul>
	<li><Link external href="https://github.com/timscodebase">GitHub</Link></li>
	<li><Link external href="https://github.com/WebRuin/webruin">Github (Archived)</Link></li>
	<li><Link external href="https://twitter.com/timsmith23">X (formally Twitter)</Link></li>
	<li><Link external href="https://codepen.io/WebRuin">CodePen</Link></li>
	<li><Link external href="https://dev.to/tithos">Dev.to</Link></li>
</ul>

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));
	}

	h3 {
		color: color-mix(in srgb, var(--primary), var(--text) 50%);
	}

	li {
		color: color-mix(in srgb, var(--primary-2), var(--text) 50%);

		&:hover {
			color: var(--primary-2);
		}
	}
</style>

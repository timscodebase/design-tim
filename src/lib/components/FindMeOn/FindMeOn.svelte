<script lang="ts">
import { Link } from "$lib";
</script>

<div class="find-me-on">
	<h3>Also find me on:</h3>
	<ul>
		<li><Link external href="https://github.com/timscodebase">GitHub</Link></li>
		<li><Link external href="https://github.com/WebRuin/webruin">Github (Archived)</Link></li>
		<li><Link external href="https://twitter.com/timsmith23">X (formally Twitter)</Link></li>
		<li><Link external href="https://codepen.io/WebRuin">CodePen</Link></li>
		<li><Link external href="https://dev.to/tithos">Dev.to</Link></li>
	</ul>
</div>

<style>
	@media (max-width: 500px) {
		.find-me-on {
			margin-top: var(--margin-md);
		}
	}
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));
	}

	h3 {
		color: var(--primary);
	}

	li {
		color: var(--primary-2);

		&:hover {
			color: var(--primary);
		}
	}
</style>

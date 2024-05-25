<script>
	import { name, description } from '$lib/config'
</script>

<a href="/">
	<div class="logo">
		<div class="name-wrapper">
			<h1>{name}</h1>
		</div>
		<p data-text={description}>{description}</p>
	</div>
</a>

<style>
	a {
		text-decoration: none;
	}
	.name-wrapper {
		display: grid;
		place-content: center;
		place-items: center;

		> * {
			grid-area: 1 / 1;
		}
	}

	@layer typography {
		h1 {
			--turn: 0.25turn;
			color: var(--primary-2);
			font-size: clamp(4rem, 9svw, 8rem);
			text-transform: uppercase;
			font-family: var(--header-font-family);
			background: linear-gradient(var(--turn), var(--primary-2), var(--primary));
			background-clip: text;
			-webkit-text-fill-color: transparent;
			text-align: center;
			font-weight: 900;
		}

		p {
			color: var(--text);
			font-size: clamp(1rem, 5svw, 2rem);
			text-align: center;
			margin-bottom: var(--margin-md);
			padding: 0;
		}
	}
</style>

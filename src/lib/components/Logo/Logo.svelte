<script>
	import { name, description } from '$lib/config'
</script>

<div class="header-content">
	<div class="logo">
		<div class="name-wrapper">
			<h1>{name}</h1>
		</div>
		<p data-text={description}>{description}</p>
	</div>
</div>

<style>
	h1,
	p {
		animation-timeline: scroll();
		animation-range: 0 160px;
	}

	@keyframes fade-to-black {
		from {
			border-bottom: none;
		}
		to {
			width: 100%;
			position: fixed;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			border-bottom: 2px solid var(--primary-2);
		}
	}

	.header-content {
		position: relative;
		z-index: 99999;
		max-width: var(--max-width);
		margin: 0 auto;
		animation: fade-to-black linear both;
		background: rgba(0, 0, 0, 0.75);
		box-shadow: none;
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
		@keyframes shrink-name {
			to {
				font-size: clamp(2rem, 4.5svw, 4rem);
			}
		}

		@keyframes shrink-description {
			to {
				font-size: clamp(0.75rem, 1.5svw, 1.2rem);
			}
		}

		h1 {
			--turn: 0.25turn;
			color: var(--primary-2);
			font-size: clamp(3rem, 7svw, 6rem);
			text-transform: uppercase;
			font-family: var(--header-font-family);
			background: linear-gradient(var(--turn), var(--primary-2), var(--primary));
			background-clip: text;
			-webkit-text-fill-color: transparent;
			text-align: center;
			font-weight: 700;
			animation: shrink-name linear both;
			animation-timeline: scroll();
			margin: -1rem;
			padding: 0;
		}

		p {
			color: var(--text);
			font-size: clamp(1rem, 4svw, 1.5rem);
			text-align: center;
			margin-bottom: var(--margin-md);
			padding: 0;
			animation: shrink-description linear both;
		}
	}
</style>

<script lang="ts">
	import { Logo, Me, Nav } from '$lib'
</script>

<header>
	<Logo />
	<Me />
	<Nav />
</header>

<style>
	header {
		padding: var(--padding-md) 0;
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: var(--gap);
	}

	@media (max-width: 600px) {
		header {
			grid-template-columns: 1fr;
			grid-template-rows: auto auto;
		}
	}
</style>

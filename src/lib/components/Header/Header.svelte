<script lang="ts">
	import { Logo, Me, Nav } from '$lib'
</script>

<header>
	<Logo />
	<Nav />
</header>

<style>
	header {
		padding: var(--padding-md) 0;
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--gap);
	}
</style>

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
		padding: var(--padding-md);
		display: grid;
		grid-template-columns: 3fr 1fr;
	}
</style>

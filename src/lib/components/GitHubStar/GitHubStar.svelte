<script>
	export let repoName = 'timscodebase/design-tim'

	let isStarred = false

	const toggleStar = async () => {
		try {
			isStarred = !isStarred
			console.log(`Repository ${repoName} ${isStarred ? 'starred' : 'unstarred'}`)
		} catch (error) {
			console.error('Error toggling star:', error)
		}
	}
</script>

<button on:click={toggleStar}>
	{#if isStarred}
		Unstar
	{:else}
		Star
	{/if}
	{repoName}
</button>

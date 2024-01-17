<script lang="ts">
	import { onNavigate } from '$app/navigation'
	import 'iconify-icon'
	// import { Utterances } from '@codewithshin/svelte-utterances'

	onNavigate((navigation) => {
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
</script>

<slot />
<!-- <Utterances reponame="timscodebase/design-tim" issueTerm="pathname" theme="github-dark" /> -->

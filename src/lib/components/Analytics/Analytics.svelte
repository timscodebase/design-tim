<script lang="ts">
	import { page } from '$app/stores'

	const MEASUREMENT_ID = 'G-EPNRTTEP8M'

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', MEASUREMENT_ID, {
				page_title: document.title,
				page_path: $page.url.pathname
			})
		}
	}
</script>

<svelte:head>
	<script>
		// Forward the necessary functions to the web worker layer
		partytown = {
			forward: ['dataLayer.push', 'gtag']
		}
	</script><script async src="https://www.googletagmanager.com/gtag/js?id=G-EPNRTTEP8M"></script>
	<script>
		window.dataLayer = window.dataLayer || []
		function gtag() {
			dataLayer.push(arguments)
		}
		gtag('js', new Date())

		gtag('config', 'G-EPNRTTEP8M')
	</script>
</svelte:head>

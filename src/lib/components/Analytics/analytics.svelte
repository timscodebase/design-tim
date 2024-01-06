<script lang="ts">
  import { page } from '$app/stores'
	import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

  $: {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-EPNRTTEP8M', {
        page_title: document.title,
        page_path: $page.url.pathname,
      })
    }
  }
</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-EPNRTTEP8M">
  </script>
  <script>
    window.dataLayer = window.dataLayer || []

    function gtag() {
      dataLayer.push(arguments)
    }

    gtag('js', new Date())
    gtag('config', 'G-EPNRTTEP8M')
  </script>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3189326528459169"
     crossorigin="anonymous"></script>
</svelte:head>

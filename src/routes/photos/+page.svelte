<script lang='ts'>
  import { onMount } from 'svelte';
  import ImageGallery from '@react2svelte/image-gallery';

	export let data: PageData
	const { photos } = data

  let width = 0

  onMount(() => {
    width = window.innerWidth
  })
</script>

<h2>Photos</h2>

{#if width > 500}
  <ImageGallery
    items={photos}
    lazyLoad={true}
    showPlayButton={false}
    showBullets={true}
    showThumbnails={false}
  />
{:else}
  <ImageGallery
    items={photos}
    lazyLoad={true}
    showPlayButton={false}
    showBullets={true}
    showThumbnails={false}
    showNav={false}
  />
{/if}

<style>
  
</style>
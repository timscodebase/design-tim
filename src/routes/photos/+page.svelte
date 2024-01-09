<script lang='ts'>
  import ImageGallery from '@react2svelte/image-gallery';

	export let data: PageData
	const { photos } = data
</script>

<h2>Photos</h2>

<ImageGallery
  items={photos}
  lazyLoad={true}
  showPlayButton={false}
  showBullets={true}
/>

<style>
  
</style>
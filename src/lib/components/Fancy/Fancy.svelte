<script>
	let { children}  = $props()
</script>

<p class="fancy-header">
	{@render children()}
</p>

<style>
	@media (max-width: 500px) {
		p {
			text-align: justify;
		}
	}
</style>

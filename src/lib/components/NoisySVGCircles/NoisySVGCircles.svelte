<svg class="shape" viewBox="0 0 200 175">
	<use
		href="#circle"
		fill="hsl(269, 65%, 52%)"
		x="50"
		y="35"
		mask="url(#shape-mask)"
		filter="url(&#39;#noise&#39;)"
	/>
	<use
		href="#circle"
		fill="hsl(337, 92%, 69%)"
		x="0"
		y="0"
		mask="url(#shape-mask)"
		filter="url(&#39;#noise&#39;)"
		transform="rotate(180)"
		transform-origin="50 50"
	/>
	<use
		href="#circle"
		fill="hsl(20, 92%, 64%)"
		x="100"
		y="75"
		mask="url(#shape-mask)"
		filter="url(&#39;#noise&#39;)"
		transform="rotate(180)"
		transform-origin="145 120"
	/>
</svg>

<style>
	/* svg {
		position: relative;
		z-index: 999;
	} */
	svg.shape {
		max-width: 80dvh;
		width: 100%; /* Needed for Safari */
	}
</style>

<svelte:head>
	<title>Tim Smith Uses</title>
	<link rel="canonical" href="https://design-tim.vercel.app/" />
	<meta name="description" content="This is the tech and software I use." />
</svelte:head>

<h2>Uses</h2>
<div>
	<section>
		<h2>Hardware</h2>
		<ul>
			<li><span>Computer</span> M3 MacBook Air</li>
			<li><span>Monitor</span> Scepter P30</li>
			<li><span>Web Cam</span> Logitech HD Pro Webcam C920</li>
			<li><span>Speakers</span> Apple HomePod Minis</li>
			<li><span>Lights</span> Nanoleaf Essentials A19</li>
			<li><span>Lights</span> Nanoleaf Lines</li>
			<li><span>Keyboard</span> Apple Wireless Keyboard</li>
			<li><span>Mouse</span> Apple Magic Trackpad</li>
			<li><span>Exercise Headphones</span> Apple AirPod Pro</li>
			<li><span>Phone</span> iPhone 13</li>
			<li><span>Watch</span> Apple Watch Series 6</li>
			<li><span>Dock</span> Anker Series 5</li>
			<li><span>Play Computer</span> Raspberry Pi 4</li>
		</ul>
	</section>
	<section>
		<h2>Software</h2>
		<ul>
			<li><span>IDE</span> VSCode-Insiders</li>
			<li><span>VSCode Theme</span> Dark+ Pure Black (OLED)</li>
			<li><span>Terminal</span> Warp</li>
			<li><span>Browser</span> Arc</li>
			<li><span>Virual Machine</span> Parallels Desktop</li>
			<li><span>General Produtivity</span> Raycast</li>
			<li><span>OS</span> 14.5 (23F79)</li>
			<li><span>Ad-Blocking</span> Pi-Hole</li>
		</ul>
	</section>
</div>

<style>
	li {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		font-weight: normal;
		padding-bottom: var(--padding-md);
	}

	@media (max-width: 1000px) {
		li {
			flex-direction: column;
			padding-bottom: calc(var(-padding-md) / 2);
		}
	}

	span {
		font-weight: 700;
		color: var(--primary);
	}
</style>

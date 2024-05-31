<script lang="ts">
	import { onMount } from 'svelte'
	const papi_1 =
		'https://res.cloudinary.com/tithos/image/upload/c_scale,h_180,q_auto:eco/v1717113031/papi-1_kjtymb.webp'
	const papi_2 =
		'https://res.cloudinary.com/tithos/image/upload/c_scale,h_180,q_auto:eco/v1717113031/papi-2_rzghzx.webp'

	onMount(() => {
		const wrapper = document.querySelector('.wrapper') as HTMLDivElement
		const img = document.querySelector('.papi') as HTMLImageElement
		const imgWrapper = document.querySelector('.img-wrapper') as HTMLDivElement

		wrapper?.addEventListener('mouseover', () => {
			if (img) img.src = papi_2
			imgWrapper.style.background = ''
		})
		wrapper?.addEventListener('mouseout', () => {
			if (img) img.src = papi_1
			imgWrapper.style.background = 'none'
		})
	})
</script>

<div class="wrapper">
	<div class="img-wrapper">
		<img class="papi" width="198" height="180" src={papi_1} alt="Papi" />
	</div>
	<div class="blockquote-wrapper">
		<div class="blockquote">
			<p>
				Okay, maybe I don't <span>ACTUALLY</span> watch Tim code every single second.
				<span>(Squirrels are fascinating, you know?)</span>
				But when I do, his fingers fly across the keyboard like he's chasing a <span>ball!</span>
				He's constantly learning new things, always on the hunt for the perfect code bone. And speaking
				of chasing, guess what? <span>He's chasing a new opportunity!</span> So, if you need a
				fantastic developer with the focus of a champion fetch retriever,
				<span>Tim's your guy!</span>
			</p>
			<h5>&mdash; Papi Dog<br /><em>I was <span>NOT</span> paid to say this!</em></h5>
		</div>
	</div>
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: 246px auto;
		place-items: center;
	}
	.wrapper:hover .img-wrapper {
		animation: pink 0.5s cubic-bezier(0, 0.82, 0.52, 1.68) forwards;
	}

	@media (max-width: 1000px) {
		.wrapper {
			grid-template-columns: 1fr;
		}
	}

	.img-wrapper {
		position: relative;
		border-radius: 20px;
		padding: 0.5rem;
		background: none;
	}
	.img-wrapper::before {
		--delta: -4rem;
		content: '“';
		position: absolute;
		top: -6rem;
		left: -2rem;
		font-size: 10rem;
		color: var(--primary);
	}

	@media (max-width: 1000px) {
		.img-wrapper::before {
			--delta: -4rem;
			top: var(--delta);
			left: var(--delta);
		}
	}

	@keyframes pink {
		0% {
			background: radial-gradient(circle, var(--primary) 0%, rgba(0, 0, 0, 0) 5%);
		}
		100% {
			background: radial-gradient(circle, var(--primary) 0%, rgba(0, 0, 0, 0) 60%);
		}
	}

	.blockquote-wrapper {
		display: flex;
	}

	.blockquote {
		position: relative;
		max-width: 620px;
		margin: 1rem auto;
		align-self: center;
	}

	.blockquote p {
		position: relative;
		color: var(--text);
		font-weight: bold;
		margin: 0;
		border: 2px solid var(--primary-2);
		border: solid 2px;
		border-radius: 20px;
		padding: 25px;
		background: rgba(0, 0, 0, 0.75);
	}

	.blockquote span {
		color: var(--primary-2);
	}

	p:before {
		content: '';
		position: absolute;
		width: 80px;
		border: 6px solid rgba(0, 0, 0, 0);
		bottom: -1px;
		left: 50px;
		z-index: 2;
	}

	h5 {
		display: block;
		position: relative;
		color: var(--text);
		font-size: 1.3rem;
		font-weight: 400;
		line-height: 1.2;
		margin: 0;
		padding-top: 15px;
		z-index: 1;
		padding-left: 150px;
		padding-bottom: 1rem;
		border-radius: 20px;
		border: 2px solid var(--primary);
		border-top: none;
	}

	@media (max-width: 1000px) {
		h5 {
			font-size: 1.1rem;
			padding-left: 50px;
			padding-bottom: 1rem;
		}
	}

	h5:first-letter {
		margin-left: -12px;
	}

	h5 span {
		color: var(--primary) !important;
		font-weight: bolder !important;
	}
</style>

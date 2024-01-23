<script lang="ts">
	import { Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from 'svelte-email'
	import { Logo } from '$lib'

	let { firstName } = $props()

	const headerFont = "'Mulish', sans-serif"
	const bodyFont = "'Space Mono', monospace"

	const main = {
		backgroundColor: '#000'
	}

	const container = {
		margin: '0 auto'
	}

	const paragraph = {
		bodyFont,
		fontSize: '16px',
		lineHeight: '26px'
	}

	const btnContainer = {
		textAlign: 'center' as const
	}

	const button = {
		bodyFont,
		backgroundColor: '#5F51E8',
		borderRadius: '3px',
		color: '#fff',
		fontSize: '16px',
		textDecoration: 'none',
		textAlign: 'center' as const,
		display: 'block'
	}

	const hr = {
		maxWidth: '50svw !important',
		width: '50svw !important',
		borderColor: '#cccccc',
		margin: '20px 0'
	}

	const footer = {
		headerFont,
		color: '#8898aa',
		fontSize: '12px'
	}
</script>

<Html lang="en">
	<Head />
	<Preview preview="Welcome to svelte-email" />
	<Section style={main}>
		<Container class="contact" style={container}>
			<Logo />
			<Text style={paragraph}>{firstName}, welcome to svelte-email</Text>
			<Text style={paragraph}>A Svelte component library for building responsive emails</Text>
			<Section style={btnContainer}>
				<Button pX={12} pY={12} style={button} href="https://github.com/carstenlebek/svelte-email">
					View on GitHub
				</Button>
			</Section>
			<Text style={paragraph}>Happy coding!</Text>
			<Hr style={hr} />
			<Text style={footer}>Tim Smith</Text>
		</Container>
	</Section>
</Html>

<style>
	.contact > div {
		width: 80svw !important;
	}
</style>

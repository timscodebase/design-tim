<script lang="ts">
	import '$css/style.css'
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { onNavigate } from '$app/navigation'
	import { Analytics, Footer, Header } from '$lib'
	import { description, name, url } from '$lib/config'
	import 'vanilla-cookieconsent/dist/cookieconsent.css'
	import * as CookieConsent from 'vanilla-cookieconsent'
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'
	import { partytownSnippet } from '@builder.io/partytown/integration'

	onNavigate((navigation) => {
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})

	injectSpeedInsights()

	let path: string
	onMount(() => {
		path = $page?.url.pathname

		document.documentElement.classList.add('cc--darkmode')

		CookieConsent.run({
			guiOptions: {
				consentModal: {
					layout: 'box',
					position: 'bottom left',
					equalWeightButtons: true,
					flipButtons: false
				},
				preferencesModal: {
					layout: 'box',
					position: 'right',
					equalWeightButtons: true,
					flipButtons: false
				}
			},
			categories: {
				necessary: {
					readOnly: true
				},
				analytics: {}
			},
			language: {
				default: 'en',
				autoDetect: 'browser',
				translations: {
					en: {
						consentModal: {
							title: "Hello traveller, it's cookie time!",
							description:
								'Our website uses cookies to enhance your browsing experience, provide personalized services, and collect information about how our website is used. This Cookie Usage Policy explains what cookies are, how we use them, and your choices regarding cookies.',
							acceptAllBtn: 'Accept all',
							acceptNecessaryBtn: 'Reject all',
							showPreferencesBtn: 'Manage preferences',
							footer: '<a href="#link">Privacy Policy</a>\n<a href="#link">Terms and conditions</a>'
						},
						preferencesModal: {
							title: 'Consent Preferences Center',
							acceptAllBtn: 'Accept all',
							acceptNecessaryBtn: 'Reject all',
							savePreferencesBtn: 'Save preferences',
							closeIconLabel: 'Close modal',
							serviceCounterLabel: 'Service|Services',
							sections: [
								{
									title: 'Cookie Usage',
									description:
										'Our website uses cookies to enhance your browsing experience, provide personalized services, and collect information about how our website is used. This Cookie Usage Policy explains what cookies are, how we use them, and your choices regarding cookies.'
								},
								{
									title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
									description:
										'Strictly necessary cookies are essential for the operation of our website. These cookies are required to enable core functionality such as security, network management, and accessibility. Without these cookies, services you have asked for, like logging into your account or completing transactions, cannot be provided.',
									linkedCategory: 'necessary'
								},
								{
									title: 'Analytics Cookies',
									description:
										'Analytics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. These cookies allow us to track and analyze the performance of our website and understand user behavior, which helps us improve our services and user experience.',
									linkedCategory: 'analytics'
								},
								{
									title: 'More information',
									description:
										'For any query in relation to my policy on cookies and your choices, please <a class="cc__link" href="https://www.timsmith.tech">contact me</a>.'
								}
							]
						}
					}
				}
			}
		})
	})
</script>

<svelte:head>
	<title>{name}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={description} />
	<meta name="author" content={description} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#000000" />
	<meta name="twitter:card" content={`${name}: ${description}`} />
	<meta name="twitter:site" content="@timsmith23" />
	<meta name="twitter:creator" content="@timsmith23" />
	<meta property="og:title" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={`${name}: ${description}`} />
	<meta property="og:site_name" content={`${name}: ${description}`} />
	<meta property="og:image" content="ogImage.png" />
	<link rel="icon" type="image/png" href="favicon.png" />
	<link rel="apple-touch-icon" href="apple-icon.png" />
	<link rel="manifest" href="manifest.json" />
	<link rel="canonical" href={url} />
	{@html '<script>' + partytownSnippet() + '</script>'}
</svelte:head>

<div class="container">
	<Header />

	<main id={$page.route.id === '/' ? 'wrapper' : ''}>
		<slot />
	</main>

	<Footer />
</div>

<Analytics />

<style>
	.container {
		padding-top: 180px;
		max-width: var(--max-width);
		margin: 0 auto;
		overflow: clip;
	}
</style>

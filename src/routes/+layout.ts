import type { Config } from '@sveltejs/adapter-vercel'
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'

export const config: Config = {
	runtime: 'nodejs18.x'
}

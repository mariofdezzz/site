// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	modules: [
		'@nuxt/eslint',
		'@nuxtjs/tailwindcss',
		'@nuxt/icon',
		'@nuxtjs/i18n',
		'@nuxtjs/color-mode',
		'@nuxt/image',
	],

	css: ['~/assets/index.css'],

	i18n: {
		baseUrl: 'https://mariofdezzz.dev',
		defaultLocale: 'en-US',
		locales: [
			{ code: 'en-US', language: 'en-US', name: 'English', file: 'en-US.json' },
			{ code: 'es-ES', language: 'es-ES', name: 'Español', file: 'es-ES.json' },
		],
	},

	routeRules: {
		// ISR global: render on-demand y revalida cada 24h (86400 s)
		'/': { isr: 86400 },
		'/**': { isr: 86400 },

		// ❗ Excepciones
		'/api/**': { ssr: true },
	},
})

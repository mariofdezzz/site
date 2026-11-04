import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	modules: [
		'@nuxt/a11y',
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/hints',
		'@nuxt/icon/module',
		'@nuxt/image',
		'@nuxtjs/i18n',
	],

	css: ['~/assets/css/main.css'],
	vite: {
		plugins: [tailwindcss()],
	},

	fonts: {
		families: [
			{
				name: 'Geist Variable',
				provider: 'npm',
				weights: ['100 900'],
			},
			{
				name: 'Geist Mono Variable',
				provider: 'npm',
				weights: ['100 900'],
			},
		],
	},

	i18n: {
		baseUrl: 'https://mariof.dev',
		defaultLocale: 'en-US',
		locales: [
			{ code: 'en-US', language: 'en-US', name: 'English', file: 'en-US.json' },
			{ code: 'es-ES', language: 'es-ES', name: 'Español', file: 'es-ES.json' },
		],
	},
})

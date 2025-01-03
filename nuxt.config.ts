export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    shim: false
  },

  srcDir: 'src/',

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/image'
  ],

  css: ['@/assets/styles/index.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/variables/index.scss";
          `
        }
      }
    }
  },

  i18n: {
    vueI18n: './src/i18n.config.ts',
    baseUrl: 'https://mariofdezzz.dev',
    locales: [
      {
        code: 'en',
        language: 'en-US',
        file: 'en-US.json',
        name: 'English',
        isCatchallLocale: true
      }, {
        code: 'es',
        language: 'es-ES',
        file: 'es-ES.json',
        name: 'Español',
        isCatchallLocale: true
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      redirectOn: 'root'
    },
    lazy: true,
    langDir: 'lang',
    strategy: 'prefix_except_default',
    defaultLocale: 'en'
  },

  compatibilityDate: '2024-11-26'
})

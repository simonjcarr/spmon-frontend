// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ["@formkit/nuxt", "@pinia/nuxt", "@nuxt/ui", "@nuxtjs/tailwindcss" ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  formkit: {
    configFile: './formkit.config.ts',
    autoImport: true
  },
  colorMode: {
    preference: 'light'
  }
})
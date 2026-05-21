// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/scss/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/main.scss" as *;'
        }
      }
    }
  },
  app: {
    head: {
      style: [
        { children: "@import url('https://fonts.googleapis.com/css2?family=Anton&family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap');" }
      ]
    }
  }
})

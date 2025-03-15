// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss"],
  tailwindcss: {},
  app: { baseURL: "https://mapleleaf3659.github.io/portfolio/" },
});

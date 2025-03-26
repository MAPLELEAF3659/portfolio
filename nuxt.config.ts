// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss"],
  tailwindcss: {},
  app: {
    baseURL: "/portfolio/",
    pageTransition: { name: "page", mode: "out-in" },
  },
  nitro: {
    prerender: {
      ignore: ["/200.html", "/404.html"],
    },
  },
});

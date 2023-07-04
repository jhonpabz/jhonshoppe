// https://nuxt.com/docs/api/configuration/nuxt-config
require("dotenv").config();

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "JHONSHOPPE",
      meta: [{ name: "description", content: "Nuxt 3 Ecommerce" }],
    },
  },
  runtimeConfig: {
    productsUri: process.env.API_BASE_URL,
  },
});

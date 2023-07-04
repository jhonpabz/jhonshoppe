// https://nuxt.com/docs/api/configuration/nuxt-config
require("dotenv").config();

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  // modules: ["@nuxtjs/tailwindcss", "@nuxtjs/dotenv"],

  app: {
    head: {
      title: "JHONSHOPPE",
      meta: [{ name: "description", content: "Nuxt 3 Ecommerce" }],
      // link: [
      //   {
      //     rel: "stylesheet",
      //     href: " https://fonts.googleapis.com/icon?family=Material+icons",
      //   },
      // ],
    },
  },
  runtimeConfig: {
    productsUri: process.env.API_BASE_URL,
  },
});

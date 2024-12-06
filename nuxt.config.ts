// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@nuxt/image",
    "@nuxt/icon",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: ["@/assets/style.css"],
  app: {
    pageTransition: {
      name: "page",
      mode: "in-out",
    },
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
    public: {
      publicKey: process.env.PUBLIC_KEY,
    },
  },
});

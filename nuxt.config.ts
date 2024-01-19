// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:["@vueuse/nuxt", "nuxt-icon", "nuxt-headlessui", "@morev/vue-transitions/nuxt"],
  css: ['~/assets/css/main.css'],
  headlessui: { prefix: 'H' },
  app: {
    head: {
      title: 'Pulse Warden',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Pulse Warden is a health monitoring system that enables you to monitor your health and that of your loved ones." },
        { hid: "keywords", name: "keywords", content: "Pulse Warden, Health Monitoring, Health, Monitoring, Pulse, Warden, Health Monitoring System, Health System, Health Monitoring App, Health App, Health Monitoring Application, Health Application, Health Monitoring Software, Health Software, Health Monitoring System Kenya, Health System Kenya, Health Monitoring App Kenya, Health App Kenya, Health Monitoring Application Kenya, Health Application Kenya, Health Monitoring Software Kenya, Health Software Kenya, Health Monitoring System Africa, Health System Africa, Health Monitoring App Africa, Health App Africa, Health Monitoring Application Africa, Health Application Africa, Health Monitoring Software Africa, Health Software Africa" },
        { name: "author", content: "Tixhub" },
        { name: "theme-color", content: "#ffffff" },
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
        { name: "theme-color", content: "#ffffff" },
        { hid: "og:title", name: "og:title", content: "Pulse Warden" },
        { hid: "og:description", name: "og:description", content: "Pulse Warden is a health monitoring system that enables you to monitor your health and that of your loved ones." },
        { hid: "og:image", name: "og:image", content: "https://tixhub.co.ke/logo.svg" },
        { hid: "og:url", name: "og:url", content: "https://tixhub.co.ke" },
        { hid: "og:site_name", name: "og:site_name", content: "Pulse Warden" },
        { hid: "og:type", name: "og:type", content: "website" },
        { hid: "twitter:title", name: "twitter:title", content: "Pulse Warden" },
        { hid: "twitter:description", name: "twitter:description", content: "Pulse Warden is a health monitoring system that enables you to monitor your health and that of your loved ones." },
      ],
      link:[
        {rel: "icon", type: "image/x-icon", href: "/logo.svg"},
        {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"},
        {rel: "preconnect", href: "https://tixhub.co.ke"},
      ]
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
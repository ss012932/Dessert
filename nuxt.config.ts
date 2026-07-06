// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  // 啟用 Nuxt SSR，讓頁面預設由伺服器端先產生 HTML，再交給前端 hydration。
  ssr: true,

  devtools: { enabled: true },

  modules: ["@nuxtjs/seo"],

  site: {
    name: "KASANE 菓",
    url: "https://dessert.christylove.com.tw",
    description: "日式甜點、和菓子、日本茶與季節禮盒。",
    defaultLocale: "zh-TW",
  },

  robots: {
    enabled: true,
    metaTag: true,
    header: true,
    allow: "/",
    disallow: ["/admin"],
    sitemap: "/sitemap.xml",
    robotsEnabledValue: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },

  sitemap: {
    enabled: true,
    autoLastmod: true,
    discoverImages: true,
  },

  routeRules: {
    "/**": { ssr: true },
  },

  css: [
    "~/assets/css/main.css",
    "~/assets/css/loading.css",
    "~/assets/css/hero.css",
    "~/assets/css/weekly.css",
    "~/assets/css/design-refine.css",
    "~/assets/css/about-values-redesign.css",
    "~/assets/css/about-intro-redesign.css",
    "~/assets/css/about-story-combined.css",
  ],
});

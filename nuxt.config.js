const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "Jeison Higuita, Software Engineer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      { name: "theme-color", content: "#000" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href: "https://fonts.googleapis.com/css?family=Roboto:700|Staatliches",
        rel: "stylesheet"
      },
      {
        href: "https://fonts.googleapis.com/css?family=Ubuntu&display=swap",
        rel: "stylesheet"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/scrollTo", ssr: false },
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/markdown", ssr: true }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    "@nuxtjs/bulma",
    "@nuxtjs/google-analytics",
    "@nuxtjs/pwa"
  ],

  googleAnalytics: {
    id: "UA-59147065-3"
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  eslintConfig: {
    root: true,
    env: {
      node: true
    },
    extends: [
      "plugin:vue/recommended",
      "eslint:recommended",
      "plugin:prettier/recommended",
      "prettier/vue"
    ],
    rules: {
      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
        {
          ignores: ["nuxt", "nuxt-link"]
        }
      ],
      "no-console": [
        "error",
        {
          allow: ["log", "error", "warn"]
        }
      ]
    },
    globals: {
      $nuxt: true
    },
    parserOptions: {
      parser: "babel-eslint"
    }
  }
};

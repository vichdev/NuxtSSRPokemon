import API from "./src/services/api";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "club-napista",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  srcDir: "src/",
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  ssr: true,
  target: "static",
  generate: {
    routes() {
      return API.get().then((res) => {
        return res.data.map((user) => {
          return "/users/" + user.id;
        });
      });
    },
    fallback: true,
    subFolders: false,
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};

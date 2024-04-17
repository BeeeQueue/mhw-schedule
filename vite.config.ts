// vite.config.js
import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import unocss from "unocss/vite"

export default defineConfig({
  css: { transformer: "lightningcss" },
  build: { cssMinify: "lightningcss" },

  plugins: [unocss(), svelte()],
})

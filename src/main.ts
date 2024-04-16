import App from "./App.svelte"

import "virtual:uno.css"
import "@unocss/reset/sanitize/assets.css"
import "@unocss/reset/sanitize/forms.css"
import "@unocss/reset/sanitize/sanitize.css"
import "@unocss/reset/sanitize/typography.css"
import "@unocss/reset/sanitize/reduce-motion.css"

export const app = new App({ target: document.getElementById("root")! })

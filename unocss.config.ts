import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from "unocss"

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      fonts: {
        sans: { name: "Sentient", provider: "fontshare" },
        serif: { name: "Amulya", provider: "fontshare" },
      },
    }),
  ],
  transformers: [transformerDirectives()],
  rules: [
    [/ratio-(\d+)/, ([, n]) => ({ "aspect-ratio": `1 / ${n}` })],
    [/opac-(.+)/, ([, value]) => ({ opacity: value })],
    [/trans-(.+)/, ([, name]) => ({ "view-transition-name": name })],
  ],
})

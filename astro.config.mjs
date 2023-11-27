import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://edubasabe.github.io",
  integrations: [tailwind()],
  image: {
    domains: ["ctfassets.net"],
  },
})

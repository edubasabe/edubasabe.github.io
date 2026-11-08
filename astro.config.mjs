// @ts-check
import { readdirSync, readFileSync } from "node:fs"
import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"
import tailwindcss from "@tailwindcss/vite"

const SITE = "https://edubasabe.github.io"

// /blog is rendered with noindex while every post is a draft; keep it out of the sitemap too.
const blogDir = new URL("./src/content/blog/", import.meta.url)
const hasPublishedPosts = readdirSync(blogDir)
  .filter((file) => file.endsWith(".md"))
  .some((file) => !/^draft:\s*true\b/m.test(readFileSync(new URL(file, blogDir), "utf8")))

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [
    icon(),
    sitemap({
      filter: (page) => hasPublishedPosts || page !== `${SITE}/blog`,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})

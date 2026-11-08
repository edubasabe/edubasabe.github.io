// @ts-check
import { existsSync, readdirSync, readFileSync } from "node:fs"
import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon"
import tailwindcss from "@tailwindcss/vite"

const SITE = "https://edubasabe.com"

/** True when the language has at least one non-draft post (drafts only show in dev). */
function hasPublishedPosts(locale) {
  const dir = new URL(`./src/content/blog/${locale}/`, import.meta.url)
  if (!existsSync(dir)) return false
  return readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .some((file) => !/^draft:\s*true\b/m.test(readFileSync(new URL(file, dir), "utf8")))
}

// A blog index with no published posts is rendered noindex, so keep it out of the sitemap too.
const emptyBlogs = [
  ...(hasPublishedPosts("en") ? [] : [`${SITE}/blog`]),
  ...(hasPublishedPosts("es") ? [] : [`${SITE}/es/blog`]),
]

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: "never",
  build: { format: "file" },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    // English stays at the root (no URL changes); Spanish lives under /es
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    icon(),
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", es: "es" } },
      filter: (page) => !emptyBlogs.includes(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})

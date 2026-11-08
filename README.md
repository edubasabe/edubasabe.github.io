# edubasabe.com

Personal portfolio of David Basabe (live at <https://edubasabe.com>; `edubasabe.github.io` redirects there), built with [Astro](https://astro.build) 7, Tailwind CSS 4 and [Bun](https://bun.sh). Deployed to GitHub Pages on every push to `master`.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `bun install`     | Install dependencies                         |
| `bun run dev`     | Start the dev server at `localhost:4321`     |
| `bun run build`   | Build the production site to `./dist/`       |
| `bun run preview` | Preview the build locally                    |

## Editing content

All content lives in markdown under `src/content/` (schemas in `src/content.config.ts`). The site is bilingual: English at `/` and Spanish at `/es`.

- `src/content/pages/<en|es>/*.md` — title, SEO description and copy for each page (`home`, `about`, `portfolio`, `contact`, `blog`). The `about.md` body is rendered as the bio. Every page needs a file in both languages.
- `src/content/projects/*.md` — one file per portfolio project (shared by both languages; only `coverAlt` is per language). Put the screenshot in `src/content/projects/covers/` and reference it from the frontmatter:

```md
---
name: "My Project"
url: "https://example.com"
cover: "./covers/my-project.webp"
coverAlt:
  en: "Homepage of the My Project website"
  es: "Página de inicio del sitio web de My Project"
date: 2024-05-01 # projects are sorted newest first
draft: false # optional, hides the project when true
---
```

Images are optimized at build time by `astro:assets`.

### Blog posts

Posts live in `src/content/blog/<en|es>/*.md`; the file name is the URL (`/blog/<name>` in English, `/es/blog/<name>` in Spanish). Images are shared and go in `src/content/blog/images/` (reference them as `../images/...`).

Write each post once per language. To link a post with its translation, give both the same `translationKey` (it defaults to the file name, so identical file names are linked automatically). Untranslated posts simply don't get the other language's `hreflang` alternate.

```md
---
title: "Under ~60 characters" # used as <h1>, <title> and headline
description: "Up to 160 characters" # meta description + listing excerpt
pubDate: 2026-11-08
updatedDate: 2026-11-10 # optional
cover: "../images/my-cover.jpg"
coverAlt: "Describe the image"
tags: ["Astro", "Performance"]
translationKey: my-post # optional, links this post to its translation
draft: false # true = only visible in `bun run dev`
---

Body in markdown. Use `##` for sections (the title is already the h1).

![Alt text](../images/photo.jpg)
*An italic line right below an image becomes its caption.*
```

The `draft: true` demo posts show the templates in dev and are never built for production.

### Languages (i18n)

- UI strings (menu, buttons, form labels…) live in `src/i18n/ui.ts`; add a language there and in `astro.config.mjs`.
- Pages are in `src/pages/[...lang]/`, so each one is built once per language.
- English has no URL prefix (existing URLs unchanged); Spanish is under `/es`.
- There is no automatic redirect based on browser language, so crawlers and users always get the URL they asked for.

## SEO

- Per-page `<title>`, meta description, canonical URL, Open Graph and Twitter cards — `src/components/SEO.astro`
- `hreflang` alternates (+ `x-default`), `og:locale`, `<html lang>` and JSON-LD `inLanguage` per language; sitemap includes both languages
- JSON-LD `@graph` with `Person`, `WebSite`, `WebPage`, plus `ProfilePage` (about) and `CollectionPage`/`ItemList` (portfolio)
- Blog: `BlogPosting` + `BreadcrumbList` JSON-LD, `og:type=article` meta, RSS feeds at `/rss.xml` and `/es/rss.xml`
- `sitemap-index.xml` via `@astrojs/sitemap`, and `public/robots.txt`
- Site-wide identity (name, socials, job title) — `src/consts.ts`

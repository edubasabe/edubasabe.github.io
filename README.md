# edubasabe.github.io

Personal portfolio of David Basabe, built with [Astro](https://astro.build) 7, Tailwind CSS 4 and [Bun](https://bun.sh). Deployed to GitHub Pages on every push to `master`.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `bun install`     | Install dependencies                         |
| `bun run dev`     | Start the dev server at `localhost:4321`     |
| `bun run build`   | Build the production site to `./dist/`       |
| `bun run preview` | Preview the build locally                    |

## Editing content

All content lives in markdown under `src/content/` (schemas in `src/content.config.ts`):

- `src/content/pages/*.md` — title, SEO description and copy for each page (`home`, `about`, `portfolio`, `contact`). The `about.md` body is rendered as the bio.
- `src/content/projects/*.md` — one file per portfolio project. Put the screenshot in `src/content/projects/covers/` and reference it from the frontmatter:

```md
---
name: "My Project"
url: "https://example.com"
cover: "./covers/my-project.webp"
coverAlt: "Homepage of the My Project website"
date: 2024-05-01 # projects are sorted newest first
draft: false # optional, hides the project when true
---
```

Images are optimized at build time by `astro:assets`.

## SEO

- Per-page `<title>`, meta description, canonical URL, Open Graph and Twitter cards — `src/components/SEO.astro`
- JSON-LD `@graph` with `Person`, `WebSite`, `WebPage`, plus `ProfilePage` (about) and `CollectionPage`/`ItemList` (portfolio)
- `sitemap-index.xml` via `@astrojs/sitemap`, and `public/robots.txt`
- Site-wide identity (name, socials, job title) — `src/consts.ts`

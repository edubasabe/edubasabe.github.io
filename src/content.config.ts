import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

/** Portfolio projects — one markdown file per project in src/content/projects */
const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      url: z.url(),
      cover: image(),
      coverAlt: z.string(),
      /** Used for ordering (newest first) */
      date: z.coerce.date(),
      draft: z.boolean().default(false),
    }),
})

/** Copy and SEO metadata for each site page, in src/content/pages */
const pages = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    heading: z.string().optional(),
    subheading: z.string().optional(),
    /** Rotating words in the home hero */
    words: z.array(z.string()).optional(),
    techStack: z.array(z.string()).optional(),
  }),
})

export const collections = { projects, pages }

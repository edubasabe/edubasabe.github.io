import { getCollection, getEntry, type CollectionEntry } from "astro:content"

export async function getPage(id: string) {
  const page = await getEntry("pages", id)
  if (!page) throw new Error(`Missing page content: src/content/pages/${id}.md`)
  return page
}

export async function getProjects() {
  const projects = await getCollection("projects", ({ data }) => !data.draft)
  return projects.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

/** Normalizes "/about.html", "/about/" and "/index.html" to "/about" or "/" */
export function cleanPath(pathname: string) {
  return pathname.replace(/(\/index)?(\.html)?\/?$/, "") || "/"
}

/** Published posts, newest first. Drafts are included only in dev. */
export async function getPosts() {
  const posts = await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft)
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}

export function readingTime(post: CollectionEntry<"blog">) {
  const words = (post.body ?? "").trim().split(/\s+/).filter(Boolean).length
  return { words, minutes: Math.max(1, Math.round(words / 200)) }
}

const dateFormat = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeZone: "UTC" })
export const formatDate = (date: Date) => dateFormat.format(date)

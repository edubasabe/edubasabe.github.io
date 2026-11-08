import { getCollection, getEntry, type CollectionEntry } from "astro:content"
import { localeMeta } from "../i18n/ui"
import { locales, type Locale } from "../i18n/ui"
import { localizedPath, type Alternates } from "../i18n/utils"

export async function getPage(id: string, locale: Locale) {
  const page = await getEntry("pages", `${locale}/${id}`)
  if (!page) throw new Error(`Missing page content: src/content/pages/${locale}/${id}.md`)
  return page
}

export async function getProjects() {
  const projects = await getCollection("projects", ({ data }) => !data.draft)
  return projects.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

/** "es/mi-post" -> "mi-post" */
export const postSlug = (post: CollectionEntry<"blog">) => post.id.split("/").slice(1).join("/")

/** Published posts of a language, newest first. Drafts are included only in dev. */
export async function getPosts(locale: Locale) {
  const posts = await getCollection(
    "blog",
    ({ id, data }) => id.startsWith(`${locale}/`) && (import.meta.env.DEV || !data.draft)
  )
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}

export const postPath = (post: CollectionEntry<"blog">, locale: Locale) =>
  localizedPath(`/blog/${postSlug(post)}`, locale)

/** The same post in the other languages (only the ones that exist) */
export async function getPostAlternates(post: CollectionEntry<"blog">): Promise<Alternates> {
  const key = post.data.translationKey ?? postSlug(post)
  const alternates: Alternates = {}
  for (const locale of locales) {
    const match = (await getPosts(locale)).find((p) => (p.data.translationKey ?? postSlug(p)) === key)
    if (match) alternates[locale] = postPath(match, locale)
  }
  return alternates
}

export function readingTime(post: CollectionEntry<"blog">) {
  const words = (post.body ?? "").trim().split(/\s+/).filter(Boolean).length
  return { words, minutes: Math.max(1, Math.round(words / 200)) }
}

const formatters = Object.fromEntries(
  locales.map((l) => [l, new Intl.DateTimeFormat(localeMeta[l].intl, { dateStyle: "medium", timeZone: "UTC" })])
) as Record<Locale, Intl.DateTimeFormat>
export const formatDate = (date: Date, locale: Locale) => formatters[locale].format(date)

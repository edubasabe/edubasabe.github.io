import { getCollection, getEntry } from "astro:content"

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

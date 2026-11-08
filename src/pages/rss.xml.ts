import rss from "@astrojs/rss"
import type { APIContext } from "astro"
import { getPosts } from "../lib/content"
import { SITE } from "../consts"

export async function GET(context: APIContext) {
  const posts = await getPosts()
  return rss({
    title: `${SITE.author} — Blog`,
    description: "Articles about frontend engineering, web development and building for the web.",
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}`,
      categories: post.data.tags,
      author: `${SITE.email} (${SITE.author})`,
    })),
    customData: "<language>en</language>",
  })
}

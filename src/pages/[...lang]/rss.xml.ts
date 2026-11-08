import rss from "@astrojs/rss"
import type { APIContext } from "astro"
import { getPosts, postPath } from "../../lib/content"
import { localeMeta } from "../../i18n/ui"
import { localeFromParam, localePaths, useUI } from "../../i18n/utils"
import { SITE } from "../../consts"

export const getStaticPaths = () => localePaths()

export async function GET(context: APIContext) {
  const locale = localeFromParam(context.params.lang)
  const t = useUI(locale)
  const posts = await getPosts(locale)
  return rss({
    title: t.blog.rssTitle,
    description: t.blog.rssDescription,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postPath(post, locale),
      categories: post.data.tags,
      author: `${SITE.email} (${SITE.author})`,
    })),
    trailingSlash: false,
    customData: `<language>${localeMeta[locale].hreflang}</language>`,
  })
}

import { defaultLocale, locales, ui, type Locale } from "./ui"

export const isLocale = (value: unknown): value is Locale => locales.includes(value as Locale)

export const localeFromParam = (lang?: string): Locale => (isLocale(lang) ? lang : defaultLocale)

export function getLocale(astro: { currentLocale?: string }): Locale {
  return localeFromParam(astro.currentLocale)
}

export const useUI = (locale: Locale) => ui[locale]

/** "/about.html", "/about/" and "/index.html" -> "/about" or "/" */
export function cleanPath(pathname: string) {
  return pathname.replace(/(\/index)?(\.html)?\/?$/, "") || "/"
}

/** Adds the locale prefix (the default locale has none): ("/about", "es") -> "/es/about" */
export function localizedPath(path: string, locale: Locale) {
  const clean = path === "/" ? "" : path.replace(/\/$/, "")
  if (locale === defaultLocale) return clean || "/"
  return `/${locale}${clean}`
}

/** "/es/about.html" -> { locale: "es", path: "/about" } */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const [, first, ...rest] = cleanPath(pathname).split("/")
  if (isLocale(first) && first !== defaultLocale) {
    return { locale: first, path: rest.length ? `/${rest.join("/")}` : "/" }
  }
  return { locale: defaultLocale, path: cleanPath(pathname) }
}

export type Alternates = Partial<Record<Locale, string>>

/** The same page in every locale (valid for pages whose slug is identical in all languages) */
export function alternatesFor(pathname: string): Alternates {
  const { path } = splitLocale(pathname)
  return Object.fromEntries(locales.map((l) => [l, localizedPath(path, l)]))
}

/** Params for `getStaticPaths` of `src/pages/[...lang]/*`: undefined = default locale (no prefix) */
export function localePaths() {
  return locales.map((l) => ({ params: { lang: l === defaultLocale ? undefined : l } }))
}

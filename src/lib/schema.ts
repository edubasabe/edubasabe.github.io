/** Helpers for building schema.org JSON-LD nodes */
export function breadcrumbs(site: URL, items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, site).href,
    })),
  }
}

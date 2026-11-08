export const locales = ["en", "es"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

export const localeMeta: Record<
  Locale,
  { label: string; short: string; hreflang: string; ogLocale: string; intl: string }
> = {
  en: { label: "English", short: "EN", hreflang: "en", ogLocale: "en_US", intl: "en-US" },
  es: { label: "Español", short: "ES", hreflang: "es", ogLocale: "es_ES", intl: "es-ES" },
}

/** UI strings. Page and post copy lives in markdown under src/content/. */
const en = {
  skipToContent: "Skip to content",
  jobTitle: "Senior Frontend Engineer",
  siteName: "David Basabe Portfolio",
  nav: {
    label: "Main",
    home: "Home",
    about: "About",
    portfolio: "Portfolio",
    blog: "Blog",
    contact: "Contact",
    logo: "ebasabe — home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  footer: { social: "Social profiles" },
  hero: { contact: "Get in touch", work: "See my work" },
  home: { imageAlt: "Two people reviewing a website together on a laptop" },
  about: { techStack: "Tech stack", pageName: "About David Basabe" },
  contact: {
    imageAlt: "Hands typing on a laptop keyboard",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@example.com",
    message: "Message",
    messagePlaceholder: "Tell me about your project",
    send: "Send message",
    preferEmail: "Prefer email? Write to",
  },
  blog: {
    minRead: (n: number) => `${n} min read`,
    readMore: "Read more",
    draft: "Draft",
    empty: "No posts yet — check back soon.",
    breadcrumb: "Breadcrumb",
    draftNotice: "Draft — visible in development only, not built for production.",
    updated: "Updated",
    tags: "Tags",
    aboutAuthor: "About the author",
    authorBlurb:
      "Senior Frontend Engineer building fast and accessible websites and web apps with React, Next.js and Astro.",
    moreAboutMe: "More about me",
    allPosts: "All posts",
    aboutLink: (name: string) => `About ${name}`,
    rssTitle: "David Basabe — Blog",
    rssDescription: "Articles about frontend engineering, web development and building for the web.",
  },
  share: {
    group: "Share this article",
    share: "Share",
    copied: "Link copied",
    on: (network: string) => `Share on ${network}`,
  },
}

const es: typeof en = {
  skipToContent: "Saltar al contenido",
  jobTitle: "Ingeniero Frontend Senior",
  siteName: "Portafolio de David Basabe",
  nav: {
    label: "Principal",
    home: "Inicio",
    about: "Sobre mí",
    portfolio: "Portafolio",
    blog: "Blog",
    contact: "Contacto",
    logo: "ebasabe — inicio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
  },
  footer: { social: "Perfiles sociales" },
  hero: { contact: "Hablemos", work: "Ver mi trabajo" },
  home: { imageAlt: "Dos personas revisando un sitio web juntas en una laptop" },
  about: { techStack: "Stack tecnológico", pageName: "Sobre David Basabe" },
  contact: {
    imageAlt: "Manos escribiendo en el teclado de una laptop",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Correo electrónico",
    emailPlaceholder: "tu@ejemplo.com",
    message: "Mensaje",
    messagePlaceholder: "Cuéntame sobre tu proyecto",
    send: "Enviar mensaje",
    preferEmail: "¿Prefieres el correo? Escribe a",
  },
  blog: {
    minRead: (n: number) => `${n} min de lectura`,
    readMore: "Leer más",
    draft: "Borrador",
    empty: "Aún no hay artículos. ¡Vuelve pronto!",
    breadcrumb: "Ruta de navegación",
    draftNotice: "Borrador: solo visible en desarrollo, no se genera para producción.",
    updated: "Actualizado",
    tags: "Etiquetas",
    aboutAuthor: "Sobre el autor",
    authorBlurb:
      "Ingeniero frontend senior. Creo sitios y aplicaciones web rápidos y accesibles con React, Next.js y Astro.",
    moreAboutMe: "Más sobre mí",
    allPosts: "Todos los artículos",
    aboutLink: (name: string) => `Sobre ${name}`,
    rssTitle: "David Basabe — Blog",
    rssDescription:
      "Artículos sobre ingeniería frontend, desarrollo web y cómo construir para la web.",
  },
  share: {
    group: "Compartir este artículo",
    share: "Compartir",
    copied: "Enlace copiado",
    on: (network: string) => `Compartir en ${network}`,
  },
}

export const ui = { en, es }

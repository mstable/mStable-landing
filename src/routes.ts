const pages = import.meta.globEager('./pages/*.tsx')

const kebabize = (str: string): string =>
  str
    .split('')
    .map((ch, idx) => (ch.toUpperCase() === ch ? `${idx !== 0 ? '-' : ''}${ch.toLowerCase()}` : ch))
    .join('')

export const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1] as string
  const isHome = name === 'Home'
  return {
    name,
    path: isHome ? '/' : `/${kebabize(name)}`,
    isHome,
    component: pages[path][name],
    seo: pages[path].SEO ?? {},
  }
})

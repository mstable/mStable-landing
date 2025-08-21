const pages = import.meta.globEager('./pages/*.tsx')

const kebabize = (str: string): string =>
  str
    .split('')
    .map((ch, idx) => (ch.toUpperCase() === ch ? `${idx !== 0 ? '-' : ''}${ch.toLowerCase()}` : ch))
    .join('')

const getName = (path: string) => path.match(/\.\/pages\/(.*)\.tsx$/)?.[1] as string
const isHomeName = (name: string) => name === 'Home'

export const routes = Object.keys(pages)
  .filter((path) => isHomeName(getName(path)))
  .map((path) => {
    const name = getName(path)
    const isHome = isHomeName(name)
    return {
      name,
      path: isHome ? '/' : `/${kebabize(name)}`,
      isHome,
      component: pages[path][name],
      seo: pages[path].SEO ?? {},
    }
  })

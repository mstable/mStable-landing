const pages = import.meta.globEager('./pages/*.tsx')

export const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1] as string
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path][name],
  }
})

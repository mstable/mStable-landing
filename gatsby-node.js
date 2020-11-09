exports.onCreatePage = ({ page, actions: { createPage, deletePage } }) => {
  const frontmatter = page.context.frontmatter
  if (frontmatter && frontmatter.type === 'post') {
    deletePage(page)
    createPage({
      ...page,
      path: `/posts${page.path}`,
    })
  }
}

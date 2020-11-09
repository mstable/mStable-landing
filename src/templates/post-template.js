import React from 'react'
import { Page } from '../components/layout/Page'

export default ({ children, pageContext }) => {
  const { frontmatter: data } = pageContext

  return (
    <Page>
      <h1>{data.title}</h1>
      <h2>{data.date}</h2>
      <p>@{data.author}</p>
      {children}
    </Page>
  )
}

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
          }
        }
      }
    }
  }
`

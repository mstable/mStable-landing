import React from 'react'
import styled from 'styled-components'
import { Page } from '../components/layout/Page'
import { Constants } from '../theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${Constants.navHeight};
  padding: 36px 24px;
  grid-column: 1/4;
  background: white;
  color: black;
`

const Frontmatter = styled.div`
  margin-bottom: 32px;
  max-width: 65ch;

  h1 {
    font-size: 48px;
  }

  h4 {
    font-weight: normal;

    > span {
      text-transform: capitalize;
    }
  }
`

export default ({ children, pageContext: { frontmatter } }) => (
  <Page>
    <Container>
      <Frontmatter>
        <h1>{frontmatter?.title}</h1>
        {!!frontmatter?.author && (
          <h4>
            posted by <span>{frontmatter?.author}</span> on {frontmatter?.date}
          </h4>
        )}
      </Frontmatter>
      {children}
    </Container>
  </Page>
)

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

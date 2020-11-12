import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { Wrapper, useLogoVisibility } from '../components/layout/Wrapper'
import { Constants } from '../theme'
import { PageProps } from 'gatsby'

type PostProps = PageProps & {
  pageContext: {
    frontmatter: { [k: string]: string }
  }
}

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

const Content = styled.div`
  width: 65ch;
`

const Frontmatter = styled.div`
  margin-bottom: 32px;
  width: 65ch;

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

const ToggleLogo: FC = () => {
  const [_, setLogoVisibility] = useLogoVisibility()
  useEffect(() => {
    setLogoVisibility(true)
  }, [])
  return null
}

const Template: FC<PostProps> = ({ children, pageContext }) => {
  const { frontmatter } = pageContext

  const metadata = {
    title: frontmatter?.title,
    description: frontmatter?.description,
  }

  return (
    <Wrapper {...metadata}>
      <Container>
        <Frontmatter>
          <ToggleLogo />
          <h1>{frontmatter?.title}</h1>
          {!!frontmatter?.author && (
            <h4>
              posted by <span>{frontmatter?.author}</span> on{' '}
              {frontmatter?.date}
            </h4>
          )}
        </Frontmatter>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  )
}

export default Template

import React, { FC } from 'react'
import Helmet from 'react-helmet'

export interface Props {
  title: string
  description: string
}

export const SEO: FC<Props> = ({ title, description }) => {
  const url = 'https://mstable.org'

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
      meta={[
        { name: `description`, content: description },
        { property: `og:title`, content: title },
        { property: `og:description`, content: description },
        { property: `og:type`, content: 'website' },
        { name: `twitter:card`, content: 'summary' },
        { name: `twitter:creator`, content: title },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: description },
        { name: 'identifier-URL', content: url },
        { name: 'language', content: 'EN' },
        { name: 'og:url', content: url },
        { name: 'rating', content: 'General' },
        { name: 'robots', content: 'index,follow' },
        { name: 'subject', content: 'A trusted stable asset protocol' },
        { name: 'twitter:description', content: description },
        { name: 'twitter:title', content: title },
        { name: 'twitter:url', content: url },
        { name: 'url', content: url },
      ]}
    />
  )
}

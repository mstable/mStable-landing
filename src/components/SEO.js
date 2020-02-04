
import React from "react"
import Helmet from "react-helmet"


export default () => {

  const title = "mSTABLE"
  const description = "mSTABLE unites stablecoins into radically safer and more usable assets ."
  const creator = "mSTABLE"

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
      meta={[
        { name: `description`,
          content: description,
        },
        { property: `og:title`,
          content: title,
        },
        { property: `og:description`,
          content: description,
        },
        { property: `og:type`,
          content: `website`,
        },
        { name: `twitter:card`,
          content: `summary`,
        },
        { name: `twitter:creator`,
          content: creator,
        },
        { name: `twitter:title`,
          content: title,
        },
        { name: `twitter:description`,
          content: description,
        },
      ]}
    />
  )
}

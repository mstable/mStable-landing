import React from "react";
import Helmet from "react-helmet";

export default () => {
  const title = "mStable";
  const description =
    "mStable unites stablecoins into radically safer and more usable assets.";
  const url = "https://mstable.org";

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      meta={[
        { name: `description`, content: description },
        { property: `og:title`, content: title },
        { property: `og:description`, content: description },
        { property: `og:type`, content: "website" },
        { name: `twitter:card`, content: "summary" },
        { name: `twitter:creator`, content: title },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: description },
        { name: "copyright", content: "Stability Labs Pty Ltd" },
        { name: "identifier-URL", content: url },
        { name: "language", content: "EN" },
        { name: "og:url", content: url },
        { name: "rating", content: "General" },
        { name: "robots", content: "index,follow" },
        { name: "subject", content: "A trusted stable asset protocol" },
        { name: "twitter:description", content: description },
        { name: "twitter:title", content: title },
        { name: "twitter:url", content: url },
        { name: "url", content: url }
      ]}
    />
  );
};

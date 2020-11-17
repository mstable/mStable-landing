module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-stylus',
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/favicon.png',
        appName: 'mSTABLE',
        appDescription: 'mSTABLE',
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        version: '1.0',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: true,
          windows: true,
        },
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `posts`,
    //     path: `${__dirname}/src/posts`,
    //   },
    // },
    // `gatsby-transformer-remark`,
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     defaultLayouts: {
    //       default: require.resolve(`${__dirname}/src/templates/Template.tsx`),
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: `${__dirname}/src/posts`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-140162190-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
  ],
}


module.exports = {

  plugins: [

    `gatsby-plugin-react-helmet`,

    'gatsby-plugin-stylus',

    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png",
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
          windows: true
        }
      }
    },

  ],
}

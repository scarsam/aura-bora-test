require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Aura Bora`,
    titleTemplate: '%s — Herbal Sparkling Water',
    description:
      'Aura Bora is a sparkling water made from real herbs, fruits, and flowers for earthly tastes and heavenly feelings. 0 Calories, 0 Sugar, 0 Sodium. Order today :)',
    url: 'https://www.aurabora.com',
    image: '/images/aura-bora-social.png',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-173914173-1',
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
        allowLinker: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '283656946065014',
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-react-helmet`,
    { resolve: `gatsby-transformer-remark` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stores`,
        path: `${__dirname}/src/cms/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://aurabora.us18.list-manage.com/subscribe/post?u=e7beea9e00caf30b70ad5aca6&amp;id=007c905f06',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aura Bora — Herbal Sparkling Water`,
        short_name: `Aura Bora`,
        start_url: `/`,
        background_color: `#a6a3b6`,
        theme_color: false,
        display: `minimal-ui`,
        icon: `src/images/aurabora-favicon.svg`,
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: `aura-bora-llc`,
        accessToken: `f2ea2484c395247f0bb5747cb3858101`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

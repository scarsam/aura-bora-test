const { createProxyMiddleware } = require('http-proxy-middleware')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
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
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    )
  },
  plugins: [
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Sku', 'Product'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

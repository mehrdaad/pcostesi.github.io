const path = require('path');

module.exports = {
  siteMetadata: {
    title: `My Blog :)`,
    description: `My words.`,
    siteUrl: 'https://pcostesi.github.io'
  },
  plugins: [
    // Typescript support
    `gatsby-plugin-typescript`,

    // SASS support
    `gatsby-plugin-sass`,

    // Add tags to <head/> from the body
    `gatsby-plugin-react-helmet`,
    // Does a pushState on non-react links (markdown, etc)
    `gatsby-plugin-catch-links`,

    // Parsing of images files
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Parse JSON files
    `gatsby-transformer-json`,

    // Data source: Stories
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: path.join(__dirname, `posts`)
      }
    },

    // Parse and transform markdown
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              // Remove the default behavior of adding a link to each
              // image.
              linkImagesToOriginal: true
            }
          },

          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`
        ]
      }
    },

    /*
    // XXX: Failing to build due to GraphQL query issue
    // RSS Feed
    {
      resolve: `gatsby-plugin-feed`
    },
    */

    // Sitemap
    {
      resolve: `gatsby-plugin-sitemap`
    }
  ]
};

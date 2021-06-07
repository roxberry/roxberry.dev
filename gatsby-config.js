/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Roxberry.DEV',
    url: 'https://www.roxberry.dev',
    author: 'Mark Roxberry',
    version: '1.1'
  },
  plugins: [
    'gatsby-plugin-sass', 
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-plugin-fontawesome-css',
    {
      resolve: `gatsby-plugin-doctype`,
      options: {
        doctype: 'HTML',
      },
    },
  ],
}

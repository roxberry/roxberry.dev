/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Roxberry.DEV",
    url: "https://www.roxberry.dev",
    siteUrl: "https://www.roxberry.dev",
    twitterUsername: "@roxberry",
    author: "Mark Roxberry",
    keywords: ["roxberry", "journal", "development"],
    featuredTags: ["Russia", "development", "performance", "robotics", "security", "privacy", "apple", "soccer"],
    version: "2022.06.19.01",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "posts",
    //     path: `${__dirname}/src/drafts`,
    //   },
    // },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          // { 
          //   resolve: "gatsby-remark-prismjs",      
          //   // options: {
          //   //   showLineNumbers: true,
          //   // }
          // },
          "gatsby-remark-mermaid",
          {
            resolve: "gatsby-remark-vscode",
            options: {
              theme:  "Dark+ (default dark)" // Or install your favorite theme from GitHub
            }
          },
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: "roxberry.dev",
              separator: "|",
              author: "Mark Roxberry",
              background: require.resolve("./src/images/profile.1.jpg"),
              fontColor: "#011a27",
              titleFontSize: 96,
              subtitleFontSize: 60,
              fontStyle: "monospace",
            },
          },
        ],
      },
    },
    // {
    //   resolve: "gatsby-plugin-doctype",
    //   options: {
    //     doctype: `HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"`,
    //   },
    // },
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.excerpt }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/feed.xml",
            title: "Roxberry.DEV RSS Feed",
            // // optional configuration to insert feed reference in pages:
            // // if `string` is used, it will be used to create RegExp and then test if pathname of
            // // current page satisfied this regular expression;
            // // if not provided or `undefined`, all pages will have feed reference inserted
            // match: "^/blog/",
            // // optional configuration to specify external rss feed, such as feedburner
            // link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
  ],
}

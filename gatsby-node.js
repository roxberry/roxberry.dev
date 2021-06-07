const { create } = require('domain')
const path = require('path')
const slugify = require("slug");

const _ = require("lodash")
const { createFilePath } = require("gatsby-source-filesystem")
const { extractMetadataFromFilename, isBlogPostFileName } = require("./src/util/posthelper");

module.exports.onCreateNode = ({ node, getNode, actions}) => {

  if(1==1) {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const { categories } = node.frontmatter;
        const slug = createFilePath({ node, getNode });

        console.log(slug)
        console.log('cats:' + categories)
        const [, date, title] = slug.match(
          /^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/
        );

        const datePath = date ? date.replace(/-/gi, "/") : ""
        const catPath = categories ? categories.join("/") : "blog"
        const slugPre = catPath ? catPath.concat("/", datePath) : datePath

        const value = `/${slugPre}/${title}/`;     
          console.log(value)
        // console.log(date)

        // const datePath = date.replace(/-/gi, "/")
        // const value = `${datePath.concat("/").concat(title)}/`;
        // console.log(datePath)

        //const value = `/${slugify(date, "/")}/${title}/`

        console.log(value)
        createNodeField({ node, name: `slug`, value });
        createNodeField({ node, name: `date`, value: date });
      }
  }

  if (1==0) {
    const filePath = createFilePath({ node, getNode, basePath: `posts` });
    
    let date, slug;
    if(isBlogPostFileName(filePath)) {
      const result  = extractMetadataFromFilename(filePath);
      date = result.date;
      slug = result.slug;
      createNodeField({ node, name: `date`, value: date });
    } else {
      slug = filePath.substring(1);
    }
    //console.log(filePath, isBlogPostFileName(filePath), slug, date);
    createNodeField({ node, name: `slug`, value: slug  });
  }

  if(1==0) {
    //TODO: think about existing SEO
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {

      const slug = path.basename(node.fileAbsolutePath, '.md')

      createNodeField({
          node,
          name: 'slug',
          value: slug
      })
    }
  }

}

module.exports.createPages = async ({graphql, actions, reporter}) => {
    const { createPage } = actions

    const blogTemplate = path.resolve('./src/templates/blog.js')
    const tagTemplate = path.resolve('./src/templates/tags.js')

    // const result = await graphql(`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)


    const result =   await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

    // handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const posts = result.data.postsRemark.edges

    posts.forEach(( { node }) => {
        createPage({
            component: blogTemplate,
            path: node.fields.slug,
            context: {
                slug: node.fields.slug,
            }
        })
    });
    
    // Extract tag data from query
    const tags = result.data.tagsGroup.group

    // Make tag pages
    tags.forEach(tag => {
        console.log(tag)
        createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
                tag: tag.fieldValue,
            },
        })
    })

}
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Pager from "../components/Pager"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : "/" + (currentPage - 1).toString()
    const nextPage = "/" + (currentPage + 1).toString()

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Welcome!" />
        <section>
          <h1>Welcome!</h1>
          <p>
            I seek out patterns, new ideas and
            paradigms. On my blog, you will find my day to day notes, ideas,
            projects and stuff that may be useful.
          </p>
        </section>
        <section>
          <h1>Posts</h1>
          <div className="flexbox">
            {data.allMarkdownRemark.edges.map((edge, i) => {
              const postImage = edge.node.frontmatter.postimage

              return (
                <div
                  key={edge.node.fields.slug + i.toString()}
                  className="post"
                >
                  <Link to={edge.node.fields.slug}>
                    {postImage && postImage.src && (
                      <GatsbyImage
                        image={postImage.src.childImageSharp.gatsbyImageData}
                        alt={postImage.alt}
                        layout="fullWidth"
                      />
                    )}
                    <h2>{edge.node.frontmatter.title}</h2>
                    <div className="postedInfo">
                      posted on {edge.node.frontmatter.date}
                    </div>
                    <div className="postExcerpt">
                      <p>{edge.node.frontmatter.excerpt}</p>
                    </div>
                  </Link>
                </div>
              )
            })}
            
            <Pager 
          isFirst={isFirst} 
          isLast={isLast} 
          prevPage={prevPage} 
          nextPage={nextPage} 
          currentPage={currentPage} 
          numPages={numPages} />
          
          </div>
        </section>   
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { featured: { eq: true } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            subtitle
            date(formatString: "LL")
            author
            excerpt
            featured
            postimage {
              alt
              src {
                absolutePath
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

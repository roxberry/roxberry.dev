import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <SEO title={tag} />
      <section>
      <h1><FontAwesomeIcon icon={['fas', 'tags']} />&nbsp;&nbsp;{tagHeader}</h1>
      <div className="flexbox">
      {edges.map(({ node }) => {

        const postImage = node.frontmatter.postimage

        return (
          <div>
            <Link to={node.fields.slug}>
              {
                  postImage && (
                      <GatsbyImage
                      image={postImage.src.childImageSharp.gatsbyImageData}
                      alt={postImage.alt}
                      layout="fullWidth"
                      />
                  )
              }
              <section>
                <h3>{node.frontmatter.title}</h3>
                <div className="postedInfo">posted on {node.frontmatter.date}</div>
                <p>{node.frontmatter.excerpt}</p>
              </section>
            </Link>
          </div> 
        ) 
        }) }
      </div>
      {/* <ul>
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul> */}
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      {/* <Link to="/tags">All tags</Link> */}
      </section>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export const query = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
              postimage
              {
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
export default Tags

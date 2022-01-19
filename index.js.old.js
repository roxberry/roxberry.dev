import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import { GatsbyImage } from "gatsby-plugin-image"
import { Link, graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
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
  `)

  return (
    <Layout>
      <SEO title="Welcome!" />
      <section>
          <h1>Welcome</h1>
          <p>I am a technologist.  I see in systems and patterns.  My blog focus is coding, architecture, integration, automation, robotics, artificial intelligence & languages.</p>
      </section>
      <section>
          <h1>Posts</h1>
          <div className="flexbox">
          {data.allMarkdownRemark.edges.map((edge, i) => {

            const postImage = edge.node.frontmatter.postimage

            return (
              <div key={edge.node.fields.slug + i.toString()} className="post">
                <Link to={edge.node.fields.slug}>
                  {
                      postImage && (
                          <GatsbyImage
                          image={postImage.src.childImageSharp.gatsbyImageData}
                          alt={postImage.alt}
                          layout="fullWidth"
                          />
                      )
                  }                
                  <h3>{edge.node.frontmatter.title}</h3>
                  <div className="postedInfo">posted on {edge.node.frontmatter.date}</div>
                  <div className="postExcerpt"><p>{edge.node.frontmatter.excerpt}</p></div>
                </Link>

              </div> 
            )
          })}
          </div>
      </section>        
    </Layout>
  )
}

export default IndexPage
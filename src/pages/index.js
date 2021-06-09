import React from "react"
import Layout from "../components/layout"
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
      <section>
          <h1>Welcome</h1>
          <p>I am a technologist and someone who seeks out new ideas and paradigms. On my blog, you will find my day to day
          notes, ideas, projects and stuff that may be useful.</p>
      </section>
      <section>
          <h1>Posts</h1>
          <div className="flexbox">
          {data.allMarkdownRemark.edges.map((edge) => {

            const postImage = edge.node.frontmatter.postimage

            return (
              <div className="post">
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
                  <div className="postExcerpt"><p>{edge.node.excerpt}</p></div>
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
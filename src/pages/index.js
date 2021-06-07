import React from "react"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              excerpt
              frontmatter {
                  title
                  subtitle
                  date(formatString: "LL")
                  author
                  featured
                  postimage
                  {
                    alt
                    src {
                      absolutePath
                      childImageSharp {
                          gatsbyImageData(
                              width: 300
                              height: 200
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
                          />
                      )
                  }                
                  <h3>{edge.node.frontmatter.title}</h3>
                  <div className="postedInfo">posted on {edge.node.frontmatter.date}</div>
                  <p>{edge.node.excerpt}</p>
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
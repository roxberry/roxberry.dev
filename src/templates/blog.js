import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import TagList from "../components/TagList"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
// import { DiscussionEmbed } from 'disqus-react'
import { Disqus } from 'gatsby-plugin-disqus';

const Blog = (props) => {
    
    const post = props.data.markdownRemark
    const postImage = post.frontmatter.postimage
    // const seoImage = null;
    const seoImage = postImage && postImage.src
    ? postImage.src.childImageSharp.resize
    : null
    const disqusShortname = "roxberry";
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    };
    const pathName = props.location.pathname


    return (

        <Layout>
            <SEO           
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
                image={seoImage}
                pathname={pathName}>
            </SEO>
            <section>
                <h1 className="postTitle">{post.frontmatter.title}</h1>
                <div className="postedInfo">posted on {post.frontmatter.date}  | tags: [ <TagList tags= { post.frontmatter.tags } /> ]</div>
                {/* by {post.frontmatter.author}</div> */}

                {
                    postImage && postImage.src && (
                        <blockquote className="postQuote" dangerouslySetInnerHTML={{__html: post.frontmatter.subtitle }}></blockquote>
                    )
                }
                {
                    postImage && postImage.src && (
                        <div className="postImage">
                            <GatsbyImage
                            image={postImage.src.childImageSharp.gatsbyImageData}
                            alt={postImage.alt}
                            layout="fullWidth"
                            formats={["auto","webp"]}
                            />
                            <div className="overlay">
                                <div className="innerOverlayText" dangerouslySetInnerHTML={{__html: post.frontmatter.excerpt }}></div>
                            </div>
                        </div>
                    )

                }

                <div className="blogBody" dangerouslySetInnerHTML={{__html: post.html}}></div>

                <Disqus
                    config={{
                        url: props.location.href,
                        identifier: post.id,
                        title: post.frontmatter.title,
                    }}
                />

                <div className="disclaimer">This post and/or images used in it may have been created or enhanced using generative AI tools for clarity and organization. However, all ideas, technical work, solutions, integrations, and other aspects described here are entirely my own.</div>
            </section>        
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
        excerpt
        id
        frontmatter {
            title
            subtitle
            excerpt
            date(formatString: "LL")
            author
            featured
            tags
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
                    resize(width: 1200) {
                        src
                        height
                        width
                      }
                }
              }
            }
        }
        html
        }
    }
`

export default Blog
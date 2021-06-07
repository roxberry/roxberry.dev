import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'

const Blog = (props) => {
    
    const postImage = props.data.markdownRemark.frontmatter.postimage
    const disqusShortname = "roxberry";
    const disqusConfig = {
      identifier: props.data.markdownRemark.id,
      title: props.data.markdownRemark.frontmatter.title,
    };


    return (

        <Layout>
            <div className="blogContent">
                <div className="postedInfo">posted on {props.data.markdownRemark.frontmatter.date} by {props.data.markdownRemark.frontmatter.author}</div>
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <div className="postImage">
                    {
                        postImage && (
                            <GatsbyImage
                            image={postImage.src.childImageSharp.gatsbyImageData}
                            alt={postImage.alt}
                            layout="fullWidth"
                            />
                        )
                    }
                    <div className="overlay">{props.data.markdownRemark.frontmatter.subtitle}</div>
                </div>
                <div className="blogBody" dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
                <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                <Helmet>
                    <script async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=d50ae18d-23ca-411f-bd12-d8b2b9bf5e18" type="text/javascript" />
                </Helmet>

                <div id="amzn-assoc-ad-d50ae18d-23ca-411f-bd12-d8b2b9bf5e18"></div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
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
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
              }
            }
        }
        html
        }
    }
`

export default Blog
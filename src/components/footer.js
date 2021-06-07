import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          version
        }
      }
    }
  `)
  return (
    <footer>
        © 2021 {data.site.siteMetadata.author} (v{data.site.siteMetadata.version})
    </footer>
  )
}

export default Footer

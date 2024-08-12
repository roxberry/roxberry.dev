import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const TagList = ({ tags }) => {
    return (
        tags.map((tag, i) => {
                let tagLink = "/tags/" + kebabCase(tag);
                return <span key={i} >{(i ? ', ' : '')}<a href={tagLink}>{ tag }</a></span>
            }
        )
    )
}

export default TagList
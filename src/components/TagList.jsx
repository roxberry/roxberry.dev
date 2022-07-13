import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

const TagList = ({ tags }) => {
    console.log(tags);
    return (
        tags.map((tag, i) => {
                let tagLink = "/tags/" + kebabCase(tag);
                return <span>{(i ? ', ' : '')}<a href={tagLink} key={i} >{ tag }</a></span>
            }
        )
    )
}

export default TagList
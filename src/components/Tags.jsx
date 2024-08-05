import React, {useState} from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import kebabCase from "lodash/kebabCase"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Tags = () =>  {

  const [state, setState] = useState({
    shown: false,
  });

  const toggleShown = () => {
    setState({
      ...state,
      shown: !state.shown,
    });
  };
  
//   const featuredTags = ["Russia", "development", "performance", "robotics", "security", "privacy"];

  const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                featuredTags
            }
        },
        allMarkdownRemark(limit: 2000) {
            group(field: {frontmatter: {tags: SELECT}}) {
                fieldValue
                totalCount
            }
        }
    }
  `)

  let featuredTags = data.site.siteMetadata.featuredTags;

  return (
    <section>
      {/* <h2 onClick={toggleShown}>{state.shown ? <span>&#8211;</span> : <span>&#43;</span>} Tags</h2> */}
      <h2>Featured Tags</h2>
      {/* <ul className="tagList fa-ul" aria-hidden={!state.shown} data-active={state.shown}> */}
      <ul className="tagList fa-ul">
        {data.allMarkdownRemark.group
            .sort((a,b) => { return a.fieldValue.toLowerCase().localeCompare(b.fieldValue.toLowerCase()); })
            .map(tag => 
                { if (1==1)
                // { if (featuredTags.indexOf(tag.fieldValue) > -1)
                    return (
                        <li key={tag.fieldValue} >
                            {/* <span className="fa-li"><i className="fas fa-tag"></i></span> */}
                            <FontAwesomeIcon className="fa-li" icon={['fas', 'tags']} size="xs" />
                            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} className="category-item" activeClassName="active">
                            {tag.fieldValue} ({tag.totalCount})
                            </Link>
                        </li>
                    )
                }
            )
        }
      </ul>
    </section>
  )
}

export default Tags
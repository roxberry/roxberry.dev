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
  
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
  `)

  return (
    <section>
      <h2 onClick={toggleShown}>{state.shown ? <span>&#8211;</span> : <span>&#43;</span>} Tags</h2>
      <ul className="tagList fa-ul" aria-hidden={!state.shown} data-active={state.shown}>
        {data.allMarkdownRemark.group.map(tag => (
          <li key={tag.fieldValue} >
            {/* <span className="fa-li"><i className="fas fa-tag"></i></span> */}
            <FontAwesomeIcon className="fa-li" icon={['fas', 'tags']} size="xs" />
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} className="category-item" activeClassName="active">
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Tags
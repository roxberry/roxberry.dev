import React from "react"
import { Link } from "gatsby"

const Pager = ({isFirst, isLast, prevPage, nextPage, currentPage, numPages}) => {

    return (
        <ul className='post-pager'
            style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            listStyle: 'none',
            paddingInlineStart: 0,
          }}>
          {!isFirst && (
            <Link to={prevPage} rel="prev" style={{marginRight: 20}}>
              ← Previous Page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 20,
              }}
            >
              <Link
                to={`/${i === 0 ? "" : i + 1}`}
                style={{
                  textDecoration: "none",
                  color: i + 1 === currentPage ? "#ffffff" : "",
                  background: i + 1 === currentPage ? "#007acc" : "",
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={nextPage} rel="next" style={{marginLeft: 20}}>
              Next Page →
            </Link>
          )}
        </ul>
    )
}

export default Pager
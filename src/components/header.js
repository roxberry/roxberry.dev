import React from "react"
import { Helmet } from "react-helmet"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          url
        }
      }
    }
  `)

  return (
    <header>
      {/* <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
      </Helmet> */}
      <div className="sub-header">
        <div className="leftSide">
            <Link to="/" className="title" activeClassName="active">{data.site.siteMetadata.title}</Link>
          <nav>
            {/* <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn"><span class="navicon"></span></label> */}

            <ul className="menu">
              <li>
                <Link to="/tags/planning" className="header-menu-item" activeClassName="active">Planning</Link>
              </li>
              <li>
                <Link to="/contact" className="header-menu-item" activeClassName="active">Contact</Link>
              </li>
              <li>
                <Link to="/tags/nwrpg" className="header-menu-item" activeClassName="active">NWRPG</Link>
              </li>
                {/* <li>
                <Link to="/blog" className="header-menu-item"  activeClassName="active">Blog</Link>
              </li> */}
            </ul>
          </nav>
        </div>
        <div className="center">
          
        </div>
        <div className="rightSide">
          <p className="tagLine">coder, maker, hacker, mentor</p>
        </div>
      </div>
    </header>
  )
}

export default Header
// <header className={headerStyles.header}>
//     <nav>
//         <h1><Link className={headerStyles.title} activeClassName={headerStyles.activeNavItem} to="/">Mark Roxberry</Link></h1>

//         <ul className={headerStyles.navList}>
//             <li>
//                 <Link className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
//             </li>
//             <li>
//                 <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
//             </li>
//         </ul>
//     </nav>
// </header>

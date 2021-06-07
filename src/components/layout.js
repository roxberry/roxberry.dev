import React from "react"
import Header from "../components/header"
import Disclaimer from "../components/disclaimer"
import Sidebar from "../components/sidebar"
import "../styles/index.scss"

// import * as layoutStyles from "../styles/layout.module.scss"

const Layout = props => {
  return (
    <div className="container">
      <Header />
      <Disclaimer />
      <main>
          <Sidebar />
          <article>
            { props.children }
          </article>
      </main>
    </div>
  )
}

export default Layout

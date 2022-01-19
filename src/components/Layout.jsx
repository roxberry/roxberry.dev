import React from "react"
import Header from "./Header"
import Disclaimer from "./Disclaimer"
import Sidebar from "./Sidebar"
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

import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import "./layout.scss"

const Layout = props => {
  return (
    <div className="layout-container">
      <div className="layout-content">
        <Header />
        <main className="layout-main">{props.children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout

import React from "react"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./footer"
import "../styles/index.scss"

const Layout = props => {
  return (
    <LayoutContainer>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </LayoutContainer>
  )
}

export default Layout

const LayoutContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: dark;
  overflow-x: hidden;
  .layout-content {
    flex-grow: 1;
  }
`

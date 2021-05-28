import React, { useContext } from "react"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./footer"
import "../styles/index.scss"
import "./layout-styles.scss"
// import { ContextProvider } from "../context/ThemeContext"

const LayoutContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: dark;
  .layout-content {
    flex-grow: 1;
  }
`

const Layout = props => {
  return (
    // <ContextProvider>
    <LayoutContainer>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </LayoutContainer>
    // </ContextProvider>
  )
}

export default Layout

import React, { useContext, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Logo from "./Logo"
import { ThemeContext } from "../context/ThemeContext"

const Header = () => {
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext)

  const breakpoints = useBreakpoint()

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          subtitle
          subtitle2
        }
      }
    }
  `)
  return (
    <>
      <GlobalStyle theme={theme} />
      <Top theme={theme}>
        <div className="title">
          <div className="header-container">
            <div onClick={toggleTheme} className="logo">
              <Logo width="122.3365" height="92.13775" />
            </div>
            <div>
              <Link className="title-container" to="/">
                <span className="author">{data.site.siteMetadata.author}</span>
                {breakpoints.md && <br />}
                <span className="subtitle">
                  {" "}
                  {data.site.siteMetadata.subtitle} {breakpoints.sm && <br />}
                  {data.site.siteMetadata.subtitle2}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Top>
      <Nav theme={theme}>
        <Link className="nav-item" activeClassName="active-nav-item" to="/">
          About
        </Link>
        <Link
          className="nav-item"
          activeClassName="active-nav-item"
          to="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className="nav-item"
          activeClassName="active-nav-item"
          partiallyActive={true}
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className="nav-item"
          activeClassName="active-nav-item"
          to="/contact"
        >
          Contact
        </Link>
      </Nav>
    </>
  )
}

export default Header

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props =>
      props.theme === "dark" ? "var(--darkest-grey)" : "var(--white)"};
    color: ${props =>
      props.theme === "dark" ? "var(--white)" : "var(--darkest-grey)"};
  }
`

const Top = styled.header`
  padding-top: 1rem;
  background: ${props =>
    props.theme === "dark" ? "var(--darkest-grey)" : "var(--white)"};
  position: relative;
  z-index: 1002;

  .author {
    font-weight: 800;
    text-align: center;
    @media (max-width: 1024px) {
      font-size: clamp(2.5rem, 1.8182rem + 3.4091vw, 4rem);
    }
  }

  .subtitle {
    font-weight: 100;
    @media (max-width: 1024px) {
      text-align: center;
      font-size: 1.5rem;
      transform: translateY(5px);
      /* test */
    }
  }

  .title {
    font-size: 2rem;
    position: relative;
  }

  .title-container {
    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    br {
      line-height: 0;
    }
  }

  .header-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    margin: 0.2rem auto 0.9rem;
    cursor: pointer;
  }

  .header-container::after {
    width: 78%;
    width: 16em;
    height: 0.7em;
    border-radius: 2px;
    z-index: -1;
    background: var(--js-yellow);
    content: "";
    position: absolute;
    top: 70px;
    transform: skewY(0.5deg);
    @media (max-width: 600px) {
      width: 95%;
    }
  }

  a {
    text-decoration: none;
    color: ${props =>
      props.theme === "dark" ? "var(--lightest-grey)" : "var(--dark-grey)"};
  }

  a:hover {
    color: #666;
  }
`

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: white;
  background: ${props =>
    props.theme === "dark" ? "var(--darkest-grey)" : "var(--white)"};
  z-index: 1001;
  padding: 0.1em;
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;

  .nav-item {
    text-decoration: none;
    color: #999;
    font-size: 1.06em;
    margin-right: 1.5rem;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    :hover {
      color: #666;
    }
  }
  .active-nav-item {
    color: ${props =>
      props.theme === "dark" ? "var(--lightest-grey)" : "var(--dark-grey)"};
  }
`

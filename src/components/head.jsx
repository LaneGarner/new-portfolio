import React, { useContext, useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "../context/ThemeContext"

const Head = ({ title }) => {
  const theme = useContext(ThemeContext)
  const [themeColor, setThemeColor] = useState("var(--white)")

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    theme.theme === "dark" ? setThemeColor("#2a2a2a") : setThemeColor("#fafafa")
  }, [theme])

  return (
    <>
      <Helmet title={` | ${data.site.siteMetadata.title}`}>
        <meta name="theme-color" content={themeColor} />
      </Helmet>
    </>
  )
}

export default Head

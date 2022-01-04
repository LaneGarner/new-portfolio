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
        {/* <meta property="og:title" content="Lane Garner" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Web and Mobile Developer" />
        <meta
          property="og:image"
          content="https://lanegarner.dev/og-image.png"
        />
        <meta property="og:url" content="https://lanegarner.dev" />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Helmet>
    </>
  )
}

export default Head

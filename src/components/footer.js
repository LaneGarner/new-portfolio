import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as footerStyles from "./footer.module.scss"

import { SiTwitter, SiLinkedin, SiGithub } from "react-icons/si"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={`${footerStyles.footer} flex-center`}>
      <div>
        <a
          href="https://github.com/LaneGarner"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex-center footer-icon">
            <SiGithub size="2em" />
            GitHub
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/lanegarner"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex-center footer-icon">
            <SiLinkedin size="2em" />
            LinkedIn
          </div>
        </a>
        <a
          href="https://twitter.com/lanegarner"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex-center footer-icon">
            <SiTwitter size="2em" />
            Twitter
          </div>
        </a>
      </div>
      <div className={footerStyles.secondFooter}>
        <span className={footerStyles.copyright}>
          © {new Date().getFullYear()}, {data.site.siteMetadata.author}.
        </span>
        <span>
          Created with{" "}
          <a href="https://www.gatsbyjs.com/" target="_blank">
            GatsbyJS
          </a>{" "}
          and{" "}
          <a href="https://sass-lang.com/" target="_blank">
            SCSS.
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer

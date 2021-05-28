import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SiTwitter, SiLinkedin, SiGithub } from "react-icons/si"
import styled from "styled-components"

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--darker-grey);
  margin-bottom: 0;
  color: var(--lightest-grey);
  padding: 0.5em 4em 0;
  a {
    text-decoration: none;
    color: var(--lightest-grey);
    width: 1em;
    transition: all 0.2s ease-in;
    padding: 0.8em 4em;
    &:hover {
      color: var(--js-yellow);
    }
    &:nth-of-type(2):hover {
      color: var(--react-blue);
    }
  }
  div {
    display: flex;
  }
  .copyright {
    color: #a4a4a4;
  }
  span:nth-of-type(2) {
    padding-left: 0.5em;
    a {
      font-size: 1em;
      padding: 0;
    }
  }
  .second-footer {
    font-size: 0.9em;
    background-color: var(--black);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 0.5em;
    padding-bottom: 1em;
    a:nth-of-type(1):hover {
      color: var(--gatsby-purple);
    }
    a:nth-of-type(2):hover {
      color: var(--sass-pink);
    }
  }
`

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
    <FooterContainer>
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
      <div className="second-footer">
        <span className="copyright">
          © {new Date().getFullYear()} {data.site.siteMetadata.author}.
        </span>
        <span>
          Built with{" "}
          <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
            GatsbyJS
          </a>{" "}
          and{" "}
          <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
            SCSS.
          </a>
        </span>
      </div>
    </FooterContainer>
  )
}

export default Footer

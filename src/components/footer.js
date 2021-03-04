import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as footerStyles from './footer.module.scss'
import './footer.scss'

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
            <a href="https://github.com/LaneGarner" target="_blank" rel="noreferrer">
                <div className="flex-center">
                    <SiGithub size="2em" />
                    GitHub
                </div>
            </a>
            <a href="https://www.linkedin.com/in/lanegarner" target="_blank" rel="noreferrer">
                <div className="flex-center">
                    <SiLinkedin size="2em" />
                    LinkedIn
                </div>
            </a>
            <a href="https://twitter.com/lanegarner" target="_blank" rel="noreferrer">
                <div className="flex-center">
                    <SiTwitter size="2em" />
                    Twitter
                </div>
            </a>
            </div>
            © {new Date().getFullYear()}, {data.site.siteMetadata.author}
        </footer>
    )
}

export default Footer

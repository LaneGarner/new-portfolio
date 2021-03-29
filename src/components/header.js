import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby";

import * as headerStyles from './header.module.scss'

import Logo from './logo'

const Header = () => {
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
        <>
            <header className={headerStyles.header}>
                <div className={headerStyles.title}>
                    <div className={headerStyles.headerContainer}>
                        <div className={headerStyles.logo}>
                            <Link to="/">
                                <Logo width="122.3365" height="92.13775" />
                            </Link>
                        </div>
                        <div style={{fontWeight: "800"}}>
                            <Link to="/">
                                {data.site.siteMetadata.author}
                                <span style={{fontWeight: "100"}}> Web Developer</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
                <nav>
                    <ul className={headerStyles.navList}>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">About</Link>
                        </li>
                        <li>
            
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
        </>
    )
}

export default Header

import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby";

import * as headerStyles from './header.module.scss'
// import './header.scss'

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
        <header className={headerStyles.header}>
            <Link className={headerStyles.title} to="/">
                <div className={headerStyles.headerContainer}>
                    <div className={headerStyles.logo}>
                        <Logo width="122.3365" height="92.13775" />
                    </div>
                    <div>
                        {data.site.siteMetadata.author}
                        <span style={{fontWeight: "100"}}> Web Developer</span>
                    </div>
                </div>
            </Link>
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

        </header>
    )
}

export default Header

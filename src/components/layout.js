import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import './layout.scss'

const Layout = (props) => {
    return (
        <div className="layout-container">
            <div className="layout-content">
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout

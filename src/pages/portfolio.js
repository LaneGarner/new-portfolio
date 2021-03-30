import React from 'react'

import Layout from "../components/layout"
import Head from "../components/head"
import {PortfolioCard} from "../components/PortfolioCard"

import { FaGithub } from "react-icons/fa"
import { GoBrowser } from "react-icons/go"

import * as portfolioStyles from './portfolio.module.scss'


const AboutPage = () => {
    return (
        <Layout>
            <Head title="Portfolio"/>
            <section className={portfolioStyles.portfolioContainer}>
                <h1>Portfolio</h1>
                <p>Here are some of my favorite projects that highlight a variety of tech that I've worked with:</p>
                <div className={portfolioStyles.portfolioCardContainer}>
                <PortfolioCard 
                    name="Shedr"
                    description="Musician’s practice toolkit web app"
                    uses="React, Node.js, SCSS, & Firebase"
                    url="https://shedr.app"
                    github="https://github.com/LaneGarner/shedr"
                />
                <PortfolioCard 
                    name="Garner Guitar"
                    description="Online guitar instruction content, courses, and advertising materials for lessons"
                    uses="Static site built with JavaScript, HTML, & CSS"
                    url="https://garnerguitar.com"
                    github="https://github.com/LaneGarner/GarnerGuitar"
                />
                <PortfolioCard 
                    name="Today List"
                    description="My version of the ultimate todo app"
                    uses="React Native, Firebase Firestore, & Redux"
                    url="https://github.com/LaneGarner/today-list"
                    github="https://github.com/LaneGarner/today-list"
                />
                <PortfolioCard 
                    name="Draftrr"
                    description="Draftrr is a writing application that encourages finishing the first draft"
                    uses="Built with remote team using React, Bootstrap, MySQL, & MongoDB"
                    url="https://draftrr.com"
                    github="https://github.com/theMVPshop/DT02/tree/main/draftrr-react"
                />
                {/* <PortfolioCard 
                    name=""
                    description=""
                    uses=""
                    url=""
                    github=""
                /> */}
                </div>
            </section>
        </Layout>
    )
}

export default AboutPage

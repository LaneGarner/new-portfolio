import React from 'react'

import Layout from "../components/layout"
import Head from "../components/head"

import { FaGithub } from "react-icons/fa";
import { GoBrowser } from "react-icons/go"

import * as portfolioStyles from './portfolio.module.scss'


const AboutPage = () => {
    return (
        <Layout>
            <Head title="Portfolio"/>
            <section className={portfolioStyles.portfolioContainer}>
                <h1>Portfolio</h1>
                <p>My portfolio blah blah blah</p>
                
                <div className={portfolioStyles.portfolioCardContainer}>
                    <a href="https://shedr.app" rel="noreferrer" target="_blank">
                        <div className={portfolioStyles.card}>
                            <h2>Shedr</h2>
                            <p>Musician’s practice toolkit web application</p>
                            <div className={portfolioStyles.preview}></div>
                            <p>Built with React.js, Node.js, CSS/SCSS, Firebase Realtime Database (No SQL), Context API, Tone.js</p>
                            <p>User authentication via email, Google, Apple, and Facebook login</p>
                            <div className={portfolioStyles.social}>
                                <a href="https://github.com/LaneGarner/shedr" rel="noreferrer" target="_blank">
                                    <div>
                                        <FaGithub size="1.7rem" />
                                        Code
                                    </div>
                                </a>
                                <a href="https://shedr.app">
                                    <div>
                                        <GoBrowser size="1.7rem" />
                                        Hosted
                                    </div>
                                </a>
                            </div>
                        </div>
                    </a>
                    <a href="https://garnerguitar.com" rel="noreferrer" target="_blank">
                        <div className={portfolioStyles.card}>
                            <h2>GarnerGuitar.com</h2>
                            <p>Online guitar instruction content, courses, and advertising materials for lessons</p>
                            <div className={portfolioStyles.preview}></div>
                            <p>Static site built with JavaScript, HTML, and CSS</p>
                            <div className={portfolioStyles.social}>
                                <a href="https://github.com/LaneGarner/GarnerGuitar" rel="noreferrer" target="_blank">
                                    <div>
                                        <FaGithub size="1.7rem" />
                                        Code
                                    </div>
                                </a>
                                <a href="https://garnerguitar.com" rel="noreferrer" target="_blank">
                                    <div>
                                        <GoBrowser size="1.7rem" />
                                        Hosted
                                    </div>
                                </a>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/LaneGarner/today-list" rel="noreferrer" target="_blank">
                        <div className={portfolioStyles.card}>
                            <h2>Today List</h2>
                            <p>My version of the ultimate todo app</p>
                            <div className={portfolioStyles.preview}></div>
                            <p>Developed with React Native, Firebase Firestore, Authentication, and Redux</p>
                            <div className={portfolioStyles.social}>
                                <a href="https://github.com/LaneGarner/today-list" rel="noreferrer" target="_blank">
                                    <div>
                                        <FaGithub size="1.7rem" />
                                        Code
                                    </div>
                                </a>
                                {/* SAVE THIS FOR FUTURE HOSTED VERSION */}
                                {/* <a href="https://todaylist.app">
                                    <div>
                                        <GoBrowser size="1.7rem" />
                                    </div>
                                    Hosted
                                </a> */}
                            </div>
                        </div>
                    </a>
                    <a href="https://lanegarner.dev" rel="noreferrer" target="_blank">
                        <div className={portfolioStyles.card}>
                            <h2>LaneGarner.dev</h2>
                            <p>Personal portfolio site</p>
                            <div className={portfolioStyles.preview}></div>
                            <p>Developed with React, Gatsby, SCSS, GraphQL, and Markdown</p>
                            <div className={portfolioStyles.social}>
                                <a href="https://github.com/LaneGarner/new-portfolio" rel="noreferrer" target="_blank">
                                    <div>
                                        <FaGithub size="1.7rem" />
                                        Code
                                    </div>
                                </a>
                                <a href="https://lanegarner.dev" rel="noreferrer" target="_blank">
                                    <div>
                                        <GoBrowser size="1.7rem" />
                                        Hosted
                                    </div>
                                </a>
                            </div>
                        </div>
                    </a>
                    {/* --------SAVE THIS TO ADD MORE CARDS------------- */}
                    {/* <a href="https://github.com/LaneGarner" rel="noreferrer" target="_blank">
                        <div className={portfolioStyles.card}>
                            <h2>Today List</h2>
                            <p></p>
                            <div className={portfolioStyles.preview}></div>
                            <div className={portfolioStyles.social}>
                                <a href="https://github.com/LaneGarner" rel="noreferrer" target="_blank">
                                    <div>
                                        <FaGithub size="1.7rem" />
                                    </div>
                                    Code
                                </a>
                                <a href="https://github.com/LaneGarner" rel="noreferrer" target="_blank">
                                    <div>
                                        <GoBrowser size="1.7rem" />
                                    </div>
                                    Hosted
                                </a>
                            </div>
                        </div>
                    </a> */}
                </div>
            </section>
        </Layout>
    )
}

export default AboutPage

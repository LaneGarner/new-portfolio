import React from 'react'

import Layout from "../components/layout"
import Head from "../components/head"

import { FaGithub, FaChrome } from "react-icons/fa";

import * as portfolioStyles from './portfolio.module.scss'


const AboutPage = () => {
    return (
        <Layout>
            <Head title="Portfolio"/>
            <section className={portfolioStyles.portfolioContainer}>
                <h1>Portfolio</h1>
                <p>My portfolio blah blah blah</p>
                <div className={portfolioStyles.portfolioCardContainer}>
                    <div className={portfolioStyles.card}>
                        <h2>Shedr</h2>
                        <p>Musician’s practice toolkit web application</p>
                        <p>React.js, Node.js, CSS/SCSS, Firebase Realtime Database (No SQL), Context API, Tone.js</p>
                        <p>Integrated email, Google, Apple, & Facebook Authentication (user login authentication)</p>
                        <div className={portfolioStyles.preview}></div>
                        <div className={portfolioStyles.social}>
                            <a href="https://github.com/LaneGarner/shedr" rel="noreferrer" target="_blank">
                                <div>
                                    <FaGithub size="2rem" />
                                </div>
                                View code
                            </a>
                            <a href="https://shedr.app">
                                <div>
                                    <FaChrome size="2rem" />
                                </div>
                                Hosted site
                            </a>
                        </div>
                    </div>
                    <div className={portfolioStyles.card}>
                        <h2>GarnerGuitar.com</h2>
                        <p>Online guitar instruction content, courses, and advertising materials for lessons</p>
                        <p>Built with React, Node.js, Gatsby, JavaScript, HTML, CSS, and Wordpress</p>
                        <div className={portfolioStyles.preview}></div>
                        <div className={portfolioStyles.social}>
                            <a href="https://github.com/LaneGarner/GarnerGuitar" rel="noreferrer" target="_blank">
                                <div>
                                    <FaGithub size="2rem" />
                                    View code
                                </div>
                            </a>
                            <a href="https://garnerguitar.com" rel="noreferrer" target="_blank">
                                <div>
                                    <FaChrome size="2rem" />
                                    Hosted site
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={portfolioStyles.card}>
                        <h2>Today List</h2>
                        <p>My version of the ultimate todo app developed with React Native, Firebase Firestore, Authentication, Redux</p>
                        <div className={portfolioStyles.preview}></div>
                        <div className={portfolioStyles.social}>
                            <a href="https://github.com/LaneGarner/today-list" rel="noreferrer" target="_blank">
                                <div>
                                    <FaGithub size="2rem" />
                                </div>
                                View code
                            </a>
                            {/* SAVE THIS FOR FUTURE HOSTED VERSION */}
                            {/* <a href="https://todaylist.app">
                                <div>
                                    <FaChrome size="2rem" />
                                </div>
                                Hosted site
                            </a> */}
                        </div>
                    </div>
                    <div className={portfolioStyles.card}>
                        <h2>LaneGarner.dev</h2>
                        <p>Personal portfolio site developed with React, Gatsby, SCSS, GraphQL, and Markdown</p>
                        <div className={portfolioStyles.preview}></div>
                        <div className={portfolioStyles.social}>
                            <a href="https://github.com/LaneGarner/new-portfolio" rel="noreferrer" target="_blank">
                                <div>
                                    <FaGithub size="2rem" />
                                </div>
                                View code
                            </a>
                            <a href="https://lanegarner.dev" rel="noreferrer" target="_blank">
                                <div>
                                    <FaChrome size="2rem" />
                                </div>
                                Hosted site
                            </a>
                        </div>
                    </div>
                    {/* SAVE THIS TO ADD MORE CARDS */}
                    {/* <div className={portfolioStyles.card}>
                        <h2>Today List</h2>
                        <p></p>
                        <div className={portfolioStyles.preview}></div>
                        <div className={portfolioStyles.social}>
                            <a href="https://github.com/LaneGarner" rel="noreferrer" target="_blank">
                                <div>
                                    <FaGithub size="2rem" />
                                </div>
                                View code
                            </a>
                            <a href="https://github.com/LaneGarner" rel="noreferrer" target="_blank">
                                <div>
                                    <FaChrome size="2rem" />
                                </div>
                                Hosted site
                            </a>
                        </div>
                    </div> */}
                </div>
            </section>
        </Layout>
    )
}

export default AboutPage

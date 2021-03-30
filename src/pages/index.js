import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Head from "../components/head"
import Transition from "../components/Transition"
import ReactTypingEffect from 'react-typing-effect';

import { SiJavascript, SiReact, SiHtml5, SiCss3, SiMysql, SiGatsby, SiFirebase, SiBootstrap, SiAdobe, SiRedux, SiSass, SiFigma, SiGithub, SiGoogle } from "react-icons/si";
import { IoBulbOutline, IoInformationCircleOutline } from "react-icons/io5";
import { FaNode, FaNpm, FaGraduationCap, FaPaintBrush } from "react-icons/fa";

import * as indexStyles from './index.module.scss'

const indexPage = () => {
  
  return (
    <Layout>
      <Head title="Home" />
      <div className={indexStyles.heroContainer}>
        <div>
          {/* <div style={{width: "500px", height: "500px", borderRadius: "50%", backgroundColor: "yellow", position: "fixed", margin: "auto", zIndex: "-100"}}></div> */}
          {/* <div style={{width: "200px", height: "20px", backgroundColor: "#0C60FF", position: "fixed", marginLeft: "auto", marginRight: "auto", left: 100, top: 100, zIndex: "-100"}}></div> */}
          <StaticImage
            src="../images/profilePic.jpg"
            alt="Profile pic"
            placeholder="blurred"
            width={300}
            height={300}
            objectFit="cover"
            imgStyle={{borderRadius: "50%"}}
            style={{borderRadius: "50%"}}
          />
        </div>
        <section className={indexStyles.right}>
            <h1>
              <ReactTypingEffect
                text={"Hello."}
                typingDelay={1000}
                eraseDelay={1500}
                speed={300}
                eraseSpeed={100}
              />
          <h2 style={{fontWeight: 100}}>I'm<span style={{fontWeight: 800}}> Lane Garner,</span><br/> a full-stack developer<br/> based in Austin, Texas.</h2>
            </h1>
          <p>Need a developer? <Link to="/contact" style={{textDecoration: "underline"}}><strong>Get in touch</strong></Link>.</p>
        </section>
      </div>
      <div className={indexStyles.hireMe}>
        <h2>Hire me</h2>
        <p>I am currently seeking full-time employment as a front-end developer. I have experience working on a remote dev team and thrive in an agile environment. I also offer freelance web development services to clients. Let's work together to create your dream website or app.</p>
        <p><Link to="/portfolio"><strong>Browse my portfolio</strong></Link> as an introduction to my work or <Link to="/contact"><strong>get in touch</strong></Link> to start a conversation.</p>
      </div>
      <div className={indexStyles.iBuild}>
        <div className={indexStyles.divOne}>I build</div>
        <Transition />
        <div className={indexStyles.divTwo}>websites and applications</div>
      </div>
      <div className={indexStyles.aboutIcons}>
        <div tooltip="React">
          <SiReact size="3em" color="var(--react-blue)" />
        </div>
        <div>
          <div tooltip="JavaScript" className={indexStyles.icon}>
            <SiJavascript color="var(--js-yellow)" size="3em" style={{background: "var(--dark-grey)"}}/>
          </div>
          <div tooltip="CSS" className={indexStyles.icon}>
            <SiCss3 size="3em" color="var(--css-blue)" />
          </div>
          <div tooltip="HTML" className={indexStyles.icon}>
            <SiHtml5 size="3em" color="var(--html-red)" />
          </div>
        </div>
        <div>
          <div tooltip="Node.js" className={indexStyles.icon}>
            <FaNode size="3em" color="var(--node-green)" />
          </div>
          <div tooltip="npm" className={indexStyles.icon}>
            <FaNpm size="3em" color="var(--npm-red)" />
          </div>
          <div tooltip="Redux" className={indexStyles.icon}>
            <SiRedux size="3em" color="var(--redux-purple)" />
          </div>
          <div tooltip="SCSS" className={indexStyles.icon}>
            <SiSass size="3em" color="var(--sass-pink)" />
          </div>
          <div tooltip="Gatsby" className={indexStyles.icon}>
            <SiGatsby size="3em" color="var(--gatsby-purple)" />
          </div>
        </div>
        <div>
          <div tooltip="MySQL" className={indexStyles.icon}>
            <SiMysql size="3em" color="var(--sql-orange)" />
          </div>
          <div tooltip="Git and GitHub" className={indexStyles.icon}>
            <SiGithub size="3em" color="var(--dark-grey)" />
          </div>
          <div tooltip="Bootstrap" className={indexStyles.icon}>
            <SiBootstrap size="3em" color="var(--bootstrap-purple)" />
          </div>
          <div tooltip="Firebase" className={indexStyles.icon}>
            <SiFirebase size="3em" color="var(--firebase-yellow)" />
          </div>
          <div tooltip="Adobe XD, Photoshop, Illustrator" className={indexStyles.icon}>
            <SiAdobe size="3em" color="var(--adobe-red)" />
          </div>
          <div tooltip="Figma" className={indexStyles.icon}>
            <SiFigma size="3em" color="var(--figma-blue)" />
          </div>
        </div>
      </div>
      <div className={indexStyles.bioCards}>
        <div>
          <div className={indexStyles.bulb}>
            <IoInformationCircleOutline color="var(--react-blue)" size="9em" />
          </div>
          <p>I have a strong foundation in JavaScript (ES6+), CSS/SCSS, HTML, mySQL, Node.js, Express, and more.</p>
        </div>
        <div>
          <div className={indexStyles.bulb}>
            <IoBulbOutline color="var(--js-yellow)" size="9em" />
          </div>
          <p>I also enjoy learning and working with technologies such as React, React Native, Gatsby, Redux, GraphQL, and Firebase to build passion projects.</p>
        </div>
        <div>
          <div className={indexStyles.bulb}>
            <FaPaintBrush color="var(--node-green)" size="9em" />
          </div>
          <p>My work is design focused and my background as a musician inspires creativity throughout the development process.</p>
        </div>
        <div>
          <div className={indexStyles.bulb}>
            <FaGraduationCap color="var(--gatsby-purple)" size="9em" />
          </div>
          <p>I recently completed a certification in Fullstack Web Development from Austin Coding Academy.</p>
        </div>
      </div>
      
    </Layout>
  )
}

export default indexPage

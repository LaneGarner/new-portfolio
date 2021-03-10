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
        <StaticImage
          src="../images/profilePic.jpg"
          alt="Profile pic"
          placeholder="blurred"
          width={300}
          height={300}
          style={{borderRadius: "50%"}}
          objectFit="cover"
        />
        <section className={indexStyles.right}>
            <h1>
              <ReactTypingEffect
                text={"Hello..."}
                typingDelay={1000}
                eraseDelay={1000}
                speed={300}
                eraseSpeed={100}
              />
            </h1>
          <h2 style={{fontWeight: 100}}>I'm<span style={{fontWeight: 800}}> Lane Garner,</span><br/> a full-stack developer<br/> based in Austin, Texas.</h2>
          <p>Need a developer? <Link to="/contact" style={{textDecoration: "underline"}}><strong>Contact me</strong></Link>.</p>
        </section>
      </div>
      <div className={indexStyles.iBuild}>
        <div className={indexStyles.divOne}>I build</div>
        <Transition />
        <div className={indexStyles.divTwo}>websites and applications</div>
      </div>
      <div className={indexStyles.aboutIcons}>
        <div>
          <SiReact title="React" size="3em" />
        </div>
        <div>
          <div className={indexStyles.icon}>
            <SiJavascript title="JavaScript" size="3em" />
          </div>
          <div className={indexStyles.icon}>
            <SiHtml5 title="HTML" size="3em" />
          </div>
          <div className={indexStyles.icon}>
            <SiCss3 title="CSS" size="3em" />
          </div>
        </div>
        <div>
          <div className={indexStyles.icon}>
            <FaNode title="Node.js" size="3em" />
          </div>
          <div className={indexStyles.icon}>
            <FaNpm title="npm" size="3em" />
          </div>
          <div className={indexStyles.icon}>
            <SiRedux title="Redux" size="3em" />
          </div>
          <div className={indexStyles.icon}>
            <SiSass title="SCSS" size="3em" />
          </div>
          <div className={indexStyles.icon}>
            <SiGatsby title="Gatsby" size="3em" />
          </div>
        </div>
        <div>
          <div className={indexStyles.icon}>
            <SiMysql title="MySQL" size="3em" />
          </div>
          <div className={indexStyles.icon}>
            <SiFirebase title="Firebase" size="3em" />
          </div>
          <div className={indexStyles.icon}>
            <SiGithub title="Git and GitHub" size="3em" />
          </div>
          <div className={indexStyles.icon}>
            <SiBootstrap title="Bootstrap" size="3em" />
          </div>
          <div className={indexStyles.icon}>
            <SiGoogle title="Google Cloud Platform" size="3em" />
          </div>
          <div className={indexStyles.icon}>
            <SiAdobe title="Adobe XD, Photoshop, Illustrator" size="3em" />
          </div>
          <div className={indexStyles.icon}>
            <SiFigma title="Figma" size="3em" />
          </div>
        </div>
      </div>
      <div className={indexStyles.bioCards}>
        <div>
          <div className={indexStyles.bulb}>
            <IoInformationCircleOutline size="9em" />
          </div>
          <p>I have a strong foundation in JavaScript (ES6+), CSS/SCSS, HTML, mySQL, Node.js, Express, and more.</p>
        </div>
        <div>
          <div className={indexStyles.bulb}>
            <IoBulbOutline size="9em" />
          </div>
          <p>I also enjoy learning and working with technologies such as React, React Native, Gatsby, Redux, GraphQL, and Firebase to build passion projects.</p>
        </div>
        <div>
          <div className={indexStyles.bulb}>
            <FaPaintBrush size="9em" />
          </div>
          <p>My work is design focused and my background as a musician inspires creativity throughout the development process.</p>
        </div>
        <div>
          <div className={indexStyles.bulb}>
            <FaGraduationCap size="9em" />
          </div>
          <p>I recently completed a certification in Fullstack Web Development from Austin Coding Academy.</p>
        </div>
      </div>
      <div className={indexStyles.hireMe}>
        <h1>Hire me</h1>
        <h2>Let's work together to create your dream website or app</h2>
        <p>I offer freelance web development services to clients</p>
        <p><Link to="/portfolio"><strong>Browse my portfolio</strong></Link> as an introduction to my work or <Link to="/contact"><strong>get in touch</strong></Link> to start the discussion</p>
      </div>
    </Layout>
  )
}

export default indexPage

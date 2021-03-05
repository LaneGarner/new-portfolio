import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Head from "../components/head"
import Transition from "../components/Transition"

import { SiJavascript, SiReact, SiHtml5, SiCss3, SiMysql, SiGatsby, SiFirebase, SiBootstrap, SiAdobe, SiRedux, SiSass, SiFigma, SiGithub, SiGoogle } from "react-icons/si";
import { IoBulbOutline, IoInformationCircleOutline } from "react-icons/io5";

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
        <div>
          <h1>Hello.</h1>
          <h2 style={{fontWeight: 100}}>I'm<span style={{fontWeight: 800}}> Lane Garner,</span><br/> a full-stack developer<br/> based in Austin, Texas.</h2>
          <p>Need a developer? <Link to="/contact" style={{textDecoration: "underline"}}>Contact me</Link>.</p>
        </div>
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
            <SiRedux title="Redux" size="3em" />
          </div>
          <div className={indexStyles.icon}>
            <SiMysql title="MySQL" size="3em" />
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
            <IoInformationCircleOutline size="7em" />
            <h3>About me</h3>
          </div>
          <p>I have a strong foundation in JavaScript (ES6+), CSS/SCSS, HTML, mySQL, Node.js, Express, and more.</p>
          <p>I also enjoy learning and working with technologies such as React, React Native, Gatsby, Redux, GraphQL, and Firebase to build passion projects.</p>
        </div>
        <div>
          <div className={indexStyles.bulb}>
            <IoBulbOutline size="9em" />
          </div>
          <p>My work is design focused and my background as a musician inspires creativity throughout the development process.</p>
          <p>I’m a recent graduate from the full-stack boot camp at Austin Coding Academy and I am currently offering freelance web development services to clients.</p>
        </div>
      </div>
      <div style={{height: "200px"}}>
        what goes here?
      </div>
    </Layout>

  )
}

export default indexPage

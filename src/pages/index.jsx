import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Icons } from "../components/Icons"
import { BioCards } from "../components/BioCards"

import Layout from "../components/layout"
import Head from "../components/head"
import Transition from "../components/Transition"
import { HireMe } from "../components/HireMe"
import ReactTypingEffect from "react-typing-effect"

import styled from "styled-components";

import * as indexStyles from "./index.module.scss"



export const query = graphql`
  query myProfilePic {
    file(relativePath: { eq: "profilePic.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const indexPage = ({ data }) => {
  return (
    <Layout>
      <Head title="Home" />
      <div className={indexStyles.heroContainer}>
        <div>
          <StaticImage
            src="../images/profilePic.jpg"
            alt="Profile pic"
            placeholder="blurred"
            width={300}
            height={300}
            objectFit="cover"
            imgStyle={{ borderRadius: "50%" }}
            style={{ borderRadius: "50%" }}
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
          </h1>
          <h2 style={{ fontWeight: 100 }}>
            I'm<span style={{ fontWeight: 800 }}> Lane Garner,</span>
            <br /> a full-stack developer
            <br /> with a passion for the front-end
            <br /> based in Austin, Texas.
          </h2>
          <p>
            Need a developer?{" "}
            <Link to="/contact" style={{ textDecoration: "underline" }}>
              <strong>Get in touch</strong>
            </Link>
            .
          </p>
        </section>
      </div>


      <HireMe />



      <div className={indexStyles.iBuild}>
        <div className={indexStyles.divOne}>I build</div>
        <Transition />
        <div className={indexStyles.divTwo}>
          websites
          <br /> and
          <br /> applications
        </div>
      </div>
      <Icons />
      <BioCards />
    </Layout>
  )
}

export default indexPage

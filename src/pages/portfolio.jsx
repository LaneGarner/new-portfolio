import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import { PortfolioCard } from "../components/PortfolioCard"

import * as portfolioStyles from "./portfolio.module.scss"

import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby";

const GarnerGuitarPreview = () => {
  return (
    <StaticImage
      src="../images/garner-guitar-screenshot.png"
      alt="garner guitar preview"
      placeholder="blurred"
      objectFit="cover"
      style={{ borderRadius: "0.5em" }}
    />
  )
}
const ShedrPreview = () => {
  return (
    <StaticImage
      src="../images/shedr-screenshot.png"
      alt="garner guitar preview"
      placeholder="blurred"
      objectFit="cover"
      style={{ borderRadius: "0.5em" }}
    />
  )
}
const DraftrrPreview = () => {
  return (
    <StaticImage
      src="../images/draftrr-screenshot.png"
      alt="Draftrr preview"
      placeholder="blurred"
      objectFit="cover"
      style={{ borderRadius: "0.5em" }}
    />
  )
}

export const query = graphql`
query PreviewPic {
  allFile {
    nodes {
      id
      childImageSharp {
        gatsbyImageData
      }
    }
  }
}
`

const AboutPage = ({data}) => {
  console.log("data: ", data)
  return (
    <Layout>
      <Head title="Portfolio" />
      <section className={portfolioStyles.portfolioContainer}>
        <h1>Portfolio</h1>
        <p>
          Some projects that demonstrate my style and highlight a variety of tech I've
          worked with:
        </p>
        <div className={portfolioStyles.portfolioCardContainer}>
          <PortfolioCard
            name="Shedr"
            description="Musician’s practice toolkit web app"
            img={<ShedrPreview/>}
            uses="React, Node.js, SCSS, &#38; Firebase"
            url="https://shedr.app"
            github="https://github.com/LaneGarner/shedr"
          />
          <PortfolioCard
            name="Garner Guitar"
            description="Online guitar instruction content, courses, and advertising materials for lessons"
            img={<GarnerGuitarPreview/>}
            uses="Static site built with JavaScript, HTML, &#38; CSS"
            url="https://garnerguitar.com"
            github="https://github.com/LaneGarner/GarnerGuitar"
          />
          {/* <PortfolioCard
            name="Today List"
            description="My version of the ultimate todo app"
            img={<ShedrPreview/>}
            uses="React Native, Firebase Firestore, &#38; Redux"
            url="https://github.com/LaneGarner/today-list"
            github="https://github.com/LaneGarner/today-list"
          /> */}
          <PortfolioCard
            name="Draftrr"
            description="Draftrr is a writing application that encourages finishing the first draft"
            img={<DraftrrPreview/>}
            uses="Built with remote team using React, Bootstrap, MySQL, &#38; MongoDB"
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

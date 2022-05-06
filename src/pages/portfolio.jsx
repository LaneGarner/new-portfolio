import React from "react"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import styled from "styled-components"

import { PortfolioCard } from "../components/PortfolioCard"
import Head from "../components/head"
import Layout from "../components/Layout"

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

const AboutPage = ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>
      <Head title="Portfolio" />
      <PortfolioContainer>
        <h1>Portfolio</h1>
        <p>
          Selected projects that demonstrate my style and highlight a variety of
          tech I've worked with:
        </p>
        <PortfolioCardContainer>
          <PortfolioCard
            name="Shedr"
            description="Musician's practice toolkit web app"
            img={<ShedrPreview />}
            uses="React, Node.js, SCSS, &#38; Firebase"
            url="https://shedr.app"
            github="https://github.com/LaneGarner/shedr"
          />
          <PortfolioCard
            name="Garner Guitar"
            description="Online guitar instruction content, courses, and advertising materials for lessons"
            img={<GarnerGuitarPreview />}
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
          {/* <PortfolioCard 
                    name=""
                    description=""
                    uses=""
                    url=""
                    github=""
                /> */}
        </PortfolioCardContainer>
      </PortfolioContainer>
    </Layout>
  )
}

export default AboutPage

const PortfolioContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
  margin-top: 1em;
  h1 {
    margin-bottom: 5px;
  }
  h1,
  h2 {
    text-align: center;
  }
  p {
    text-align: center;
    max-width: 30em;
    @media (max-width: 720px) {
      width: 75vw;
    }
  }
  a {
    text-decoration: none;
  }
`
const PortfolioCardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

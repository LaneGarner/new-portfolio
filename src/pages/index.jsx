import React from "react"
import { graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import { Icons } from "../components/Icons"
import { BioCards } from "../components/BioCards"
import Layout from "../components/layout"
import Head from "../components/head"
import { WorkWithMe } from "../components/WorkWithMe"
import { Hero } from "../components/Hero"
import { IBuild } from "../components/IBuild"
import { BottomContentWrapper } from "../components/BottomContentWrapper"

const indexPage = ({ data }) => {
  return (
    <Layout>
      <Head title="Home" />
      <Hero />
      <WorkWithMe />
      <BottomContentWrapper>
        <IBuild />
        <Icons />
        <BioCards />
      </BottomContentWrapper>
    </Layout>
  )
}

export default indexPage

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

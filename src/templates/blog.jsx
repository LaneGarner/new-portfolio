import React, { useContext } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

import * as blogPostStyles from "./blogpost.module.scss"

import { FaArrowCircleLeft } from "react-icons/fa"
import { ThemeContext } from "../context/ThemeContext"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
              width: 500
            )
          }
        }
      }
      html
    }
  }
`

const Blog = ({ data }) => {
  const theme = useContext(ThemeContext)

  return (
    <Layout>
      <Head title={data.markdownRemark.frontmatter.title} />
      <BlogPostStyled theme={theme.theme} className="blog-post-container">
        <Link className="back-button" to="/blog">
          <FaArrowCircleLeft />
          Back
        </Link>
        <div className="blog-head">
          <h1 className="title">{data.markdownRemark.frontmatter.title}</h1>
          <p className="date">{data.markdownRemark.frontmatter.date}</p>
          <GatsbyImage
            image={getImage(
              data.markdownRemark.frontmatter.featuredImage.childImageSharp
                .gatsbyImageData
            )}
            alt="Banner"
            className="blog-img"
          />
        </div>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </BlogPostStyled>
    </Layout>
  )
}

export default Blog

const BlogPostStyled = styled.div`
  margin-bottom: 2em;

  .blog-head {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-size: 2.5em;
    text-align: center;
  }

  .date {
    font-size: 1.3em;
    text-align: center;
    margin-top: 5px;
    color: var("--lighter-grey");
  }

  .blog-img {
    border-radius: 0.5em;
    margin: 1em;
    @media (max-width: 800px) {
      width: 80%;
    }
  }

  .blog-content {
    margin: 2em 8em;
    @media (max-width: 800px) {
      margin: 2em 2em;
    }
  }

  p {
    font-size: 1.1em;
  }

  a {
    color: ${props =>
      props.theme === "dark" ? "var(--lightest-grey)" : "var(--dark-grey)"}
  }

  .back-button {
    margin: 2em;
    display: flex;
    align-items: center;
    color: ${props =>
      props.theme === "dark" ? "var(--lightest-grey)" : "var(--light-grey)"};
    position: sticky;
    z-index: 1000;
    transform: translateY(50px);
    top: 0;
    svg {
      margin-right: 0.5em;
      color: var("--dark-grey");
    }
    @media (max-width: 800px) {
      display: none;
      position
    }
  }
`

import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as blogPostStyles from "./blogpost.module.scss"

import { FaArrowCircleLeft } from "react-icons/fa"

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
  return (
    <Layout>
      <Head title={data.markdownRemark.frontmatter.title} />
      <div className={blogPostStyles.blogPostContainer}>
        <h1 className={blogPostStyles.title}>
          {data.markdownRemark.frontmatter.title}
        </h1>
        <p className={blogPostStyles.date}>
          {data.markdownRemark.frontmatter.date}
        </p>
        <GatsbyImage
          image={getImage(
            data.markdownRemark.frontmatter.featuredImage.childImageSharp
              .gatsbyImageData
          )}
          alt="Banner"
          // className={blogStyles.blogImg}
        />

        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
        <Link to="/blog">
          <FaArrowCircleLeft />
          Back to posts
        </Link>
      </div>
    </Layout>
  )
}

export default Blog

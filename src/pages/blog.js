import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Head from "../components/head"

import * as blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              featuredImage {
                base
                publicURL
              }
            }
            fields {
              slug
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <div className={blogStyles.blogContainer}>
        <h1>Blog</h1>
        <p>My blog posts</p>
        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => (
            <li className={blogStyles.post}>
              <p>{edge.node.frontmatter.featuredImage.publicURL}</p>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <p>{`./${edge.node.frontmatter.featuredImage.base}`}</p>
                {/* <StaticImage
                  image={`./${edge.node.frontmatter.featuredImage.base}`}
                  alt="Featured image"
                  placeholder="blurred"
                  width={300}
                  height={300}
                  objectFit="cover"
                /> */}
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage

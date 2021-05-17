import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Head from "../components/head"

import * as blogStyles from "./blog.module.scss"

const BlogPage = ({ data }) => {
  const posts = data.posts.edges

  return (
    <Layout>
      <Head title="Blog" />
      <div className={blogStyles.blogContainer}>
        <h1>Blog</h1>
        <p>My blog posts</p>
        <ol className={blogStyles.posts}>
          {posts.map(post => (
            <li key={post.id} className={blogStyles.post}>
              <Link to={`/blog/${post.node.fields.slug}`}>
                <h2>{post.node.frontmatter.title}</h2>
                <p className={blogStyles.date}>{post.node.frontmatter.date}</p>
                <GatsbyImage
                  image={getImage(
                    post.node.frontmatter.featuredImage.childImageSharp
                      .gatsbyImageData
                  )}
                  alt="Banner"
                  className={blogStyles.blogImg}
                />
                <p>{post.node.excerpt}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query BlogPosts {
    posts: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
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
          fields {
            slug
          }
          html
          excerpt
          id
        }
      }
    }
  }
`

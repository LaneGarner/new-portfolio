import React, { useContext } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import { ThemeContext } from "../context/ThemeContext"

const BlogPage = ({ data }) => {
  const posts = data.posts.edges.reverse()
  const { theme } = useContext(ThemeContext)

  return (
    <Layout>
      <Head title="Blog" />
      <BlogContainer theme={theme}>
        <h1>Blog</h1>
        <p>My blog posts</p>
        <ol className="posts">
          {posts.map(post => (
            <li key={post.id} className="post">
              <Link to={`/blog/${post.node.fields.slug}`}>
                <h2>{post.node.frontmatter.title}</h2>
                <p className="date">{post.node.frontmatter.date}</p>
                <GatsbyImage
                  image={getImage(
                    post.node.frontmatter.featuredImage.childImageSharp
                      .gatsbyImageData
                  )}
                  alt="Banner"
                  className="blog-img"
                />
                <p>{post.node.excerpt}</p>
              </Link>
            </li>
          ))}
        </ol>
      </BlogContainer>
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
const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 2em;

  .blog-img {
    border-radius: 0.5em;
    margin: 1em;
  }

  h1 {
    margin-bottom: 5px;
  }

  h1, h2, p:nth-of-type(1) {
    color: ${props =>
      props.theme === "dark" ? "var(--lightest-grey)" : "var(--dark-grey)"}}
  }

  .post {
    margin-bottom: 4em;
    
    a {
      background: ${props =>
        props.theme === "dark" ? "var(--black)" : "var(--lightest-grey)"};
      /* color: #000; */
      display: block;
      padding: 1rem;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 40em;
      border-radius: var(--border-radius);
      padding: 2em;

      @media (max-width: 720px) {
        width: 85vw;
        margin: auto;
      }
      h2 {
        width: 10em;
        text-align: center;
        line-height: 0.8em;
        margin-bottom: 5px;
      }
    }

    a:hover {
      background: ${props =>
        props.theme === "dark" ? "var(--black)" : "#e4e4e4"};
    }

    p {
      color: #777;
      font-size: 0.9rem;
      font-style: italic;
      width: 90%;
    }
    .date {
      font-size: 1em;
      margin-bottom: 0;
      margin-top: 5px;
      text-align: center;
    }
  }

  .posts {
    list-style-type: none;
    margin: 0;
  }
`

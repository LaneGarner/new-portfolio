import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head"

import './blog.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                    frontmatter {
                        title
                        date
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
            <Head title="Blog"/>
            <h1>Blog</h1>
            <p>Posts will show up her later on...</p>
            <ol className="posts">
                {data.allMarkdownRemark.edges.map((edge)=> (
                    <li className="post">
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </Link>
                    </li>
                ))}
            </ol>
        </Layout>
    )
}

export default BlogPage

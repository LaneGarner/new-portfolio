import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

import * as blogStyles from './blog.module.scss'

import { FaArrowCircleLeft } from "react-icons/fa"


export const query = graphql`
    query (
        $slug: String!
    ) {
    markdownRemark (fields: {slug: { eq: $slug } }) {
        frontmatter {
            title
            date
        }
        html
    }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
            <div className={blogStyles.blogPostContainer}>
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <p className={blogStyles.date}>{props.data.markdownRemark.frontmatter.date}</p>
                <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
                <Link to="/blog">
                    <FaArrowCircleLeft />
                    Back to posts
                </Link>
            </div>
        </Layout>
    )
}

export default Blog

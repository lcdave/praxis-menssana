import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby';


const IndexPage = (props) => {
  const data = props.data.allFile.nodes[0].childMarkdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title="Home" />
      <img src={data.image} alt="headerimg" />
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
              nodes {
                  childMarkdownRemark {
                      frontmatter {
                          title
                          intro
                          image
                      }
                  }
              }
        }
    }`

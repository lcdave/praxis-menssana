import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from 'gatsby';


const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
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

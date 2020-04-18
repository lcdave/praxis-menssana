import React from "react"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import Text from "../components/text/text"

const Schlafstoerungen = (props) => {
	const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
	const content = props.data.allFile.edges[0].node.childMarkdownRemark.html

	return (
		<Layout>
			<SEO title="Home"/>
			<Navbar />
			<Header data={data} variant="small" />
			<section className="section">
				<Text content={content} variant="var_left" />
			</section>
			<Footer />
		</Layout>
	)
}

export default Schlafstoerungen

export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "content"} name: {eq: "schlafstoerungen"}}) {
            edges {
                node {
                    childMarkdownRemark {
                        frontmatter {
                            headerimage
                            headertitle
                        }
                        html
                    }
                }
            }
        }
    }`
import React from "react"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import Text from "../components/text/text"

const Phobien = (props) => {
	const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
	const content = props.data.allFile.edges[0].node.childMarkdownRemark.html

	return (
		<Layout>
			<SEO title="Home"/>
			<Navbar />
			<Header data={data} variant="small" />
			<section className="section">
				<div className="container">
					<div className="column">
						<Text content={content} variant="var_left" />
					</div>
				</div>
			</section>
			<Footer />
		</Layout>
	)
}

export default Phobien

export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "content"} name: {eq: "phobien"}}) {
            edges {
                node {
                    childMarkdownRemark {
                        frontmatter {
                            headerimage_lh_l
                            headerimage_s
                            headertitle
                        }
                        html
                    }
                }
            }
        }
    }`
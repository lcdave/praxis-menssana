import React from "react"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import Navbar from "../components/navbar/navbar"
import Text from "../components/text/text"
import Footer from "../components/footer/footer"
import Cards from "../components/cards/cards"

const IndexPage = (props) => {
	const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

    return (
		<Layout>
			<SEO title="Home"/>
			<Navbar />
			<Header data={data} />
			<section className="section">
				<Text title={data.introtitle} text={data.introtext} />
			</section>
			<Cards data={data} />
			<Footer />
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
            edges {
                node {
                    childMarkdownRemark {
                        frontmatter {
                            headerimage_l
                            headerimage_s
                            headertitle
                            headerquote
                            introtitle
                            introtext
                            card_1_title
                            card_1_content
                            card_1_link
                            card_2_title
                            card_2_content
                            card_2_link
                            card_3_title
                            card_3_content
                            card_3_link
                            card_4_title
                            card_4_content
                            card_4_link
                            card_5_title
                            card_5_content
                            card_5_link
                            card_6_title
                            card_6_content
                            card_6_link
                        }
                    }
                }
            }
        }
    }`
import React from "react"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import Cards from "../components/cards/cards"
import CookieBanner from "../components/cookiebanner/cookiebanner"

const IndexPage = (props) => {
	const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
    return (
		<Layout>
			<SEO title="Home"/>
			<Navbar />
			<Header data={data} />
			<Cards data={data} />
			<Footer />
			<CookieBanner />
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
                            headerimage
                            headertitle
                            headerquote
                            introtitle
                            introtext
                            card_1_title
                            card_1_image
                            card_1_content
                            card_1_link
                            card_2_title
                            card_2_image
                            card_2_content
                            card_2_link
                            card_3_title
                            card_3_image
                            card_3_content
                            card_3_link
                            card_4_title
                            card_4_image
                            card_4_content
                            card_4_link
                            card_5_title
                            card_5_image
                            card_5_content
                            card_5_link
                            card_6_title
                            card_6_image
                            card_6_content
                            card_6_link
                        }
                    }
                }
            }
        }
    }`
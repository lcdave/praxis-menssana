import React from "react"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import Navbar from "../components/navbar/navbar"
import Text from "../components/text/text"
import Card from "../components/card/card"
import Footer from "../components/footer/footer"

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
			<section className="section">
				<div className="container">
					<div className="columns">
						<div className="column">
							<Card title={data.card_1_title} content={data.card_1_content} />
						</div>
						<div className="column">
							<Card title={data.card_1_title} content={data.card_1_content} />
						</div>
						<div className="column">
							<Card title={data.card_1_title} content={data.card_1_content} />
						</div>
					</div>
					<div className="columns">
						<div className="column">
							<Card title={data.card_1_title} content={data.card_1_content} />
						</div>
						<div className="column">
							<Card title={data.card_1_title} content={data.card_1_content} />
						</div>
						<div className="column">
							<Card title={data.card_1_title} content={data.card_1_content} />
						</div>
					</div>
				</div>
			</section>
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
                        }
                    }
                }
            }
        }
    }`
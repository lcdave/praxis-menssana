import React from "react"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import Text from "../components/text/text"

const UeberMich = (props) => {
	const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
	const content = props.data.allFile.edges[0].node.childMarkdownRemark.html

	return (
		<Layout>
			<SEO title={data.seoTitle} description={data.seoDescription} keywords={data.seoKeywords} />
			<Navbar />
			<Header data={data} variant="small" />
			<section className="section">
				<div className="container">
					<div className="columns">
						<div className="column">
							<Text content={content} variant="var_left" />
						</div>
						<div className="column">
							<div className="mod_profile">
								<img src={data.profile_img} alt="Profilbild, Yvonne Amtmann, Hypnosetherapeutin" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</Layout>
	)
}

export default UeberMich

export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "content"} name: {eq: "uebermich"}}) {
            edges {
                node {
                    childMarkdownRemark {
                        frontmatter {
                            seoTitle
                            seoDescription
                            seoKeywords
                            headerimage
                            headertitle
                            profile_img
                        }
                        html
                    }
                }
            }
        }
    }`
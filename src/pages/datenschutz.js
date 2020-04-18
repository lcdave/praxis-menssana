import React from "react"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import GoogleMapReact from 'google-map-react';

import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import Form from "../components/form/form"
import Text from "../components/text/text"

const Datenschutz = (props) => {
	const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
	const content = props.data.allFile.edges[0].node.childMarkdownRemark.html

	return (
		<Layout>
			<SEO title={data.seoTitle} description={data.seoDescription} keywords={data.seoKeywords} />
			<Navbar />
			<Header data={data} variant="small" />
			<section className="section">
				<Text content={content} variant="var_left" />
			</section>
			<Footer />
		</Layout>
	)
}

export default Datenschutz

export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "content"} name: {eq: "datenschutz"}}) {
            edges {
                node {
                    childMarkdownRemark {
                        frontmatter {
                            seoTitle
                            seoDescription
                            seoKeywords
                            headerimage
                            headertitle
                            introtitle
                        }
                        html
                    }
                }
            }
        }
    }`
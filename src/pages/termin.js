import React from "react"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import GoogleMapReact from 'google-map-react';

import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import Text from "../components/text/text"
import Form from "../components/form/form"

const Termin = (props) => {
	const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
	const content = props.data.allFile.edges[0].node.childMarkdownRemark.html

	return (
		<Layout>
			<SEO title="Home"/>
			<Navbar />
			<Header data={data} variant="small" />
			<section className="section">
				<div className="container">
					<div className="columns is-desktop">
					<div className="column">
						<Form />
					</div>
					<div className="column">
						<Text content={content} variant="var_left" />
					</div>
				</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.0701322615278!2d7.634326015746407!3d47.52749760143199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b7ec8e199951%3A0xd4e1bf4dc482e035!2sBaselstrasse%2086%2C%204132%20Muttenz!5e0!3m2!1sde!2sch!4v1582578057317!5m2!1sde!2sch"
						width="100%" height="450" frameBorder="0" allowFullScreen="" />
				</div>
			</section>
			<Footer />
		</Layout>
	)
}

export default Termin

export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "content"} name: {eq: "termin"}}) {
            edges {
                node {
                    childMarkdownRemark {
                        frontmatter {
                            headerimage_lh_l
                            headerimage_s
                            headertitle
                            introtitle
                        }
                        html
                    }
                }
            }
        }
    }`
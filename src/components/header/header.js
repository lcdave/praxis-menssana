import React from "react"

import { graphql } from "gatsby"

const Header = () => {
	const data = props.data.allFile.nodes[0].childMarkdownRemark.frontmatter;

	return (
		<header className="mod_header">
			<div className="header__image">IMAGE</div>
			<div className="header__title">
				<h1>{data.headertitle}</h1>
			</div>
			<div className="header__quote">
				<h3>{data.headerquote}</h3>
			</div>
		</header>
	)
}


export default Header

export const query = graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
            nodes {
                childMarkdownRemark {
                    frontmatter {
                        headerimage
                        headertitle
                        headerquote
                    }
                }
            }
        }
    }`

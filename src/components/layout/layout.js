/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { CookiesProvider } from "react-cookie"
import "./_layout.scss"

const Layout = ({ children }) => {
	return (
		<>
			<CookiesProvider>
				<main>{children}</main>
			</CookiesProvider>
		</>
	)
}

export default Layout

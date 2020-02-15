import React from "react"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"



const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
    </Layout>
  )
}

export default IndexPage
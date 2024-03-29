import React from "react"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import ContactForm from "../components/form/form"

const Termin = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <SEO
        title={data.seoTitle}
        description={data.seoDescription}
        keywords={data.seoKeywords}
      />
      <Navbar />
      <Header data={data} variant="small" />

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-two-thirds">
              <div className="mod_text var_left">
                <div className="container">
                  <div className="text__content">
                    <h3>Termine</h3>
                    <ul>
                      <li>Montag bis Donnerstag: ab 18:00 Uhr</li>
                      <li>Samstag: 09:00 - 12:00 Uhr oder nach Vereinbarung</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="mod_text var_left">
                <div className="container">
                  <div className="text__content">
                    <h3>Preise</h3>
                    <ul>
                      <li>CHF 120.- pro Sitzung</li>
                      <li>
                        Persönliches Vorgespräch (ca. 45 Minuten) kostenlos
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-two-thirds">
              <ContactForm />
            </div>
            <div className="column">
              <img
                className="form_image"
                src="/assets/Praxisraum.jpg"
                alt="Hypnosepraxis Menssana, Therapie Raum"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.0701322615278!2d7.634326015746407!3d47.52749760143199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b7ec8e199951%3A0xd4e1bf4dc482e035!2sBaselstrasse%2086%2C%204132%20Muttenz!5e0!3m2!1sde!2sch!4v1582578057317!5m2!1sde!2sch"
            width="100%"
            height="450"
            title="Google Maps"
            allowFullScreen=""
          />
        </div>
      </section>

      <Footer />
    </Layout>
  )
}

export default Termin

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "termin" } }
    ) {
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
  }
`

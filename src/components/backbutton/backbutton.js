import React from "react"
import "./_backbutton.scss"
import { Link } from "gatsby"

const BackButton = () => {
  return (
    <div className="mod_back-button">
      <div className="container">
        <Link to="/#cards" className="button is-light">
          zurück zur Übersicht
        </Link>
      </div>
    </div>
  )
}

export default BackButton

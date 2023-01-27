import React from "react"
import "./_header.scss"
import { Link } from "gatsby"

const Header = (data) => {
  const backgroundImageUrl = "url('" + data.data.headerimage + "')"

  if (data.variant === "small") {
    return (
      <header className="mod_header var_small">
        <div
          className="header__image"
          style={{ background: backgroundImageUrl }}
        >
          <div className="header__text">
            <div className="container">
              <h1 className="header__title">{data.data.headertitle}</h1>
            </div>
          </div>
        </div>
      </header>
    )
  } else {
    return (
      <header className="mod_header">
        <div
          className="header__image"
          style={{ background: backgroundImageUrl }}
        />
        <div className="header__text">
          <h1 className="header__title">{data.data.headertitle}</h1>
          <h3 className="header__quote">{data.data.headerquote}</h3>
          <Link to="/termin" className="button is-medium is-light">
            Termin vereinbaren
          </Link>
        </div>
      </header>
    )
  }
}

export default Header

import React, { useState } from "react"
import { Link } from "gatsby"

import "./_navbar.scss"

const Navbar = () => {
  const [mainnavState, setMainnavState] = useState("")
  const mainnavClass = "navbar-menu " + mainnavState
  const mainnavBurgerClass = "navbar-burger burger " + mainnavState
  const [dropdownState, setDropdownState] = useState("")

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <h1>
            <span className="first_letter">M</span>enssana
          </h1>
        </a>
        <div
          role="button"
          id="navbarBurger"
          className={mainnavBurgerClass}
          aria-label="menu"
          aria-expanded="false"
          data-target="mainnav"
          onClick={() => {
            onNavBarBurgerClick()
          }}
          onKeyDown={() => {
            onNavBarBurgerClick()
          }}
          tabIndex={0}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="mainnav" className={mainnavClass}>
        <div className="navbar-end">
          <Link to="/" className="navbar-item">
            Startseite
          </Link>
          <Link to="/reinkarnationstherapie" className="navbar-item">
            Reinkarnationstherapie
          </Link>
          <Link to="/hypnosetherapie" className="navbar-item">
            Hypnosetherapie
          </Link>
          <div
            className={`navbar-item has-dropdown is-hoverable ${dropdownState}`}
          >
            <div
              className="navbar-link"
              onClick={onHasDropdownClick}
              onKeyDown={onHasDropdownClick}
              role="button"
              tabIndex={0}
            >
              Anwendungsbereiche
            </div>
            <div className={`navbar-dropdown ${dropdownState}`}>
              <Link to="/aengste-phobien" className="navbar-item">
                Ängste / Phobien
              </Link>
              <Link to="/gewichtsreduktion" className="navbar-item">
                Gewichtsreduktion
              </Link>
              <Link to="/schlafstoerungen" className="navbar-item">
                Schlafstörungen
              </Link>
              <Link to="/schmerzen-migraenen" className="navbar-item">
                Schmerzen / Migränen
              </Link>
              <Link to="/lernschwierigkeiten" className="navbar-item">
                Lernschwierigkeiten
              </Link>
              <Link
                to="/selbstbewusstsein-ich-staerkung"
                className="navbar-item"
              >
                Selbstbewusstsein / Ich-Stärkung
              </Link>
            </div>
          </div>
          <Link to="/termin" className="navbar-item">
            Termin vereinbaren
          </Link>
          <Link to="/ueber-mich" className="navbar-item">
            Über mich
          </Link>
        </div>
      </div>
    </nav>
  )

  function onNavBarBurgerClick() {
    if (mainnavState === "is-active") {
      setMainnavState("")
    } else {
      setMainnavState("is-active")
    }
  }

  function onHasDropdownClick() {
    if (dropdownState === "is-active") {
      setDropdownState("")
    } else {
      setDropdownState("is-active")
    }
  }
}

export default Navbar

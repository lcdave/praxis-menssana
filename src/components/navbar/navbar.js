import React from "react"
import { Link } from "gatsby"

import "./_navbar.scss"

const Navbar = () => {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="/">
					<h1><span className="first_letter">M</span>enssana</h1>
				</a>
				<a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
				   data-target="mainnav">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="mainnav" className="navbar-menu">
				<div className="navbar-end">
					<Link to="/" className="navbar-item">Home</Link>
					<Link to="/hypnosetherapie" className="navbar-item">Hypnosetherapie</Link>
					<div className="navbar-item has-dropdown is-hoverable">
						<a className="navbar-link">Anwendungsbereiche</a>
						<div className="navbar-dropdown">
							<Link to="/phobien" className="navbar-item">Phobien</Link>
							<Link to="/übergewicht" className="navbar-item">Übergewicht</Link>
							<Link to="/schlafstörungen" className="navbar-item">Schlafstörungen</Link>
							<Link to="/raucherentwöhnung" className="navbar-item">Raucherentwöhnung</Link>
							<Link to="/neurodermitis" className="navbar-item">Neurodermitis</Link>
						</div>
					</div>
					<Link to="/termin" className="navbar-item">Termin vereinbaren</Link>
					<Link to="/ueber-mich" className="navbar-item">Über mich</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
import React from "react"
import "./_navbar.scss"

const Navbar = () => {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="https://bulma.io">
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
					<a className="navbar-item">Home</a>
					<a className="navbar-item">Hypnosetherapie</a>
					<a className="navbar-item">Termin vereinbaren</a>
					<a className="navbar-item">Kosten</a>
					<a className="navbar-item">Über mich</a>

				</div>
			</div>
		</nav>
	)
}

export default Navbar
import React from "react"

import { FaPhone } from "react-icons/fa"
import { GoMail } from "react-icons/go"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"


import "./_footer.scss"
import { Link } from "gatsby"

const Footer = (data) => {
	return (
		<footer className="mod_footer">
			<div className="footer__contact">
				<div className="container">
					<div className="columns is-desktop">
						<div className="column">
							<h2>Lassen Sie sich persönlich beraten</h2>
						</div>
						<div className="column">
							<div className="footer__phone">
								<FaPhone/> <span className="footer__phone-label">+41 (0)79 470 87 77</span>
							</div>
						</div>
						<div className="column">
							<div className="footer__mail">
								<Link to="/termin#contact_form">
									<GoMail/> <span className="footer__mail-label">E-Mail</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__sitemap">
				<div className="container">
					<div className="columns is-desktop">
						<div className="column">
							<p className="footer__link-title">
								<Link to="/">Startseite</Link>
							</p>
						</div>
						<div className="column">
							<p className="footer__link-title">
								<Link to="/hypnosetherapie">Hypnosetherapie</Link>
							</p>
						</div>
						<div className="column">
							<p className="footer__link-title var_no-link">
								Anwendungsbereiche
							</p>
							<p className="footer__link">
								<Link to="/aengste-phobien">Ängste / Phobien</Link>
							</p>
							<p className="footer__link">
								<Link to="/gewichtsreduktion">Gewichtsreduktion</Link>
							</p>
							<p className="footer__link">
								<Link to="/schlafstoerungen">Schlafstörungen</Link>
							</p>
							<p className="footer__link">
								<Link to="/schmerzen-migraenen">Schmerzen / Migränen</Link>
							</p>
							<p className="footer__link">
								<Link to="/lernschwierigkeiten">Lernschwierigkeiten</Link>
							</p>
							<p className="footer__link">
								<Link to="/selbstbewusstsein-ich-staerkung">Selbstbewusstsein / Ich-Stärkung</Link>
							</p>
						</div>
						<div className="column">
							<p className="footer__link-title">
								<Link to="/termin">Termin vereinbaren</Link>
							</p>
						</div>
						<div className="column">
							<p className="footer__link-title">
								<Link to="/ueber-mich">Über mich</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__service-navigation">
				<div className="container">
					<div className="columns is-mobile">
						<div className="column is-four-fifths-desktop">
							<Link to="/datenschutz" className="service-navigation__link">Datenschutz</Link>
							<Link to="/impressum" className="service-navigation__link">Impressum</Link>
							<Link to="/relevante-seiten" className="service-navigation__link">Relevante Seiten</Link>
						</div>
						<div className="column">
							<div className="service-navigation__social">
								<a href="https://www.facebook.com/Hypnosepraxis-Menssana-105571791009303/" target="_blank">
									<FaFacebook/>
								</a>
								<a href="https://www.instagram.com/hypnosepraxis_menssana/" target="_blank">
									<FaInstagram/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
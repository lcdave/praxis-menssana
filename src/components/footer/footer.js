import React from "react"

import { FaPhone } from "react-icons/fa"
import { GoMail } from "react-icons/go"


import "./_footer.scss"

const Footer = (data) => {
	return (
		<footer className="mod_footer">
			<div className="footer__contact">
				<div className="container">
					<div className="columns">
						<div className="column">
							<h2>Lassen Sie sich persönlich beraten</h2>
						</div>
						<div className="column">
							<div className="footer__phone">
								<FaPhone/> <span className="footer__phone-label">+41 (0)61 000 00 00</span>
							</div>
						</div>
						<div className="column">
							<div className="footer__mail">
								<GoMail/> <span className="footer__mail-label">E-Mail</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__sitemap">
				<div className="container">
					<div className="columns">
						<div className="column">
							<p className="footer__link-title">
								<a href="https://bulma.io/blog">Home</a>
							</p>
						</div>
						<div className="column">
							<p className="footer__link-title">
								<a href="https://bulma.io/blog">Hypnosetherapie</a>
							</p>
							<p className="footer__link"><a href="/2019/10/15/light-dark-colors/">Ängste</a></p>
							<p className="footer__link"><a href="/2019/10/15/light-dark-colors/">Ängste</a></p>
							<p className="footer__link"><a href="/2019/10/15/light-dark-colors/">Ängste</a></p>
							<p className="footer__link"><a href="/2019/10/15/light-dark-colors/">Ängste</a></p>
						</div>
						<div className="column">
							<p className="footer__link-title">
								<a href="https://bulma.io/blog">Termin vereinbaren</a>
							</p>
							<p className="footer__link"><a href="/2019/10/15/light-dark-colors/">Ängste</a></p>
							<p className="footer__link"><a href="/2019/10/15/light-dark-colors/">Ängste</a></p>
						</div>
						<div className="column">
							<p className="footer__link-title">
								<a href="https://bulma.io/blog">Kosten</a>
							</p>
							<p className="footer__link"><a href="/2019/10/15/light-dark-colors/">Ängste</a></p>
						</div>
						<div className="column">
							<p className="footer__link-title">
								<a href="https://bulma.io/blog">Über mich</a>
							</p>
							<p className="footer__link"><a href="/2019/10/15/light-dark-colors/">Ausbildung</a></p>
							<p className="footer__link"><a href="/2019/10/15/light-dark-colors/">Persönliches</a></p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
import React from "react"

import "./_footer.scss"

const Footer = (data) => {
	return (
		<footer className="mod_footer">
			<div className="container">
				<div className="columns">
					<div className="column">
						<p className="footer__link-title">
							<a href="https://bulma.io">Home</a>
						</p>
						<p className="footer__link-title">
							<a href="https://bulma.io/blog">Blog</a>
						</p>
						<p className="footer__link">
							<a href="/2019/10/15/light-dark-colors/">
								Light/Dark colors, better look, larger controls
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
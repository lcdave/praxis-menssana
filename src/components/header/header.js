import React from "react"
import "./_header.scss"

const Header = (data) => {
	if (data.variant === 'small') {
		return (
			<header className="mod_header var_small">
				<div className="header__image is-hidden-mobile">
					<div className="header__image-title-container">
						<div className="container">
							<div className="header__image-title">
								{data.data.headertitle}
							</div>
						</div>
					</div>
					<img src={data.data.headerimage_lh_l} alt="Header" />
				</div>
				<div className="header__image is-hidden-desktop">
					<img src={data.data.headerimage_s} alt="Header" />
				</div>
			</header>
		)
	} else {
		return (
			<header className="mod_header">
				<div className="header__image" />
				<div className="header__text">
					<h1 className="header__title">{data.data.headertitle}</h1>
					<h3 className="header__quote">{data.data.headerquote}</h3>
					<a className="button is-medium">Termin vereinbaren</a>
				</div>
			</header>
		)
	}
}

export default Header
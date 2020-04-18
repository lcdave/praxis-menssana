import React from "react"
import { Link } from "gatsby"

import "./_card.scss"

const Card = (data) => {
	return (
			<div className="card">
				<Link className="card__link" to={data.link}>
				<div className="card-image">
					<figure className="image is-4by3">
						<img src={data.image} alt="Place" />
					</figure>
				</div>
				</Link>
				<div className="card-content">
					<h3 className="content-title">{data.title}</h3>
					<div className="content">{data.content}</div>
				</div>
				<div className="card-footer">
					<Link className="button is-light" to={data.link}>Mehr erfahren</Link>
				</div>
			</div>
	)
}

export default Card
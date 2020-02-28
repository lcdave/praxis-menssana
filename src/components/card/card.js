import React from "react"
import { Link } from "gatsby"

import "./_card.scss"

const Card = (data) => {
	console.log(data.link);
	return (
			<div className="card">
				<Link className="card__link" to={data.link}>
				<div className="card-image">
					<figure className="image is-4by3">
						<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
					</figure>
				</div>
				</Link>
				<div className="card-content">
					<div className="media">
						<div className="media-content">
							<p className="title is-4">{data.title}</p>
						</div>
					</div>
					<div className="content">{data.content}</div>
					<Link className="button" to="{data.link}">Mehr erfahren</Link>
				</div>
			</div>
	)
}

export default Card
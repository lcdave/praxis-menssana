import React from "react"

import "./_card.scss"

const Card = (data) => {
	return (
		<div className="card">
			<div className="card-image">
				<figure className="image is-4by3">
					<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
				</figure>
			</div>
			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<p className="title is-4">{data.title}</p>
					</div>
				</div>

				<div className="content">{data.content}</div>
			</div>
		</div>
	)
}

export default Card
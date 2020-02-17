import React from "react"
import "./_text.scss"

const Text = (data) => {
	return (
		<div className="mod_text">
			<div className="container">
				<h2 className="text__title">{data.title}</h2>
				<div className="text__content">{data.text}</div>
			</div>
		</div>
	)
}

export default Text
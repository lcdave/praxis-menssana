import React from "react"
import "./_quote.scss"

const Quote = (data) => {
	console.log(data);

	return (
		<div className="mod_quote">
			<div className="container">
				<div className="quote__content">{data.content}</div>
			</div>
		</div>
	)
}

export default Quote
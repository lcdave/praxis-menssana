import React from "react"
import "./_text.scss"

const Text = (data) => {
	return (
		<div className={'mod_text ' + data.variant}>
			<div className="container">
				<div className="text__content" dangerouslySetInnerHTML={{ __html: data.content }} />
			</div>
		</div>
	)
}

export default Text
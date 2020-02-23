import React from "react"

import "./_cards.scss"
import Card from "../card/card"

const Cards = (data) => {
	return (
		<div className="mod_cards">
			<section className="section">
				<div className="container">
					<h2 className="cards__title">Anwendungsbereiche</h2>
					<div className="columns">
						<div className="column">
							<Card title={data.data.card_1_title} content={data.data.card_1_content} />
						</div>
						<div className="column">
							<Card title={data.data.card_1_title} content={data.data.card_1_content} />
						</div>
						<div className="column">
							<Card title={data.data.card_1_title} content={data.data.card_1_content} />
						</div>
					</div>
					<div className="columns">
						<div className="column">
							<Card title={data.data.card_1_title} content={data.data.card_1_content} />
						</div>
						<div className="column">
							<Card title={data.data.card_1_title} content={data.data.card_1_content} />
						</div>
						<div className="column">
							<Card title={data.data.card_1_title} content={data.data.card_1_content} />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Cards
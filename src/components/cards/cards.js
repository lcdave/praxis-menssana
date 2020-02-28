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
						<div className="column is-half-tablet">
							<Card title={data.data.card_1_title} content={data.data.card_1_content} link={data.data.card_1_link} />
						</div>
						<div className="column is-half-tablet">
							<Card title={data.data.card_2_title} content={data.data.card_2_content} link={data.data.card_2_link} />
						</div>
						<div className="column is-half-tablet">
							<Card title={data.data.card_3_title} content={data.data.card_3_content} link={data.data.card_3_link} />
						</div>
					</div>
					<div className="columns">
						<div className="column is-half-tablet">
							<Card title={data.data.card_4_title} content={data.data.card_4_content} link={data.data.card_4_link} />
						</div>
						<div className="column is-half-tablet">
							<Card title={data.data.card_5_title} content={data.data.card_5_content} link={data.data.card_5_link} />
						</div>
						<div className="column is-half-tablet">
							<Card title={data.data.card_6_title} content={data.data.card_6_content} link={data.data.card_6_link} />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Cards
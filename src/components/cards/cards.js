import React from "react"

import "./_cards.scss"
import Card from "../card/card"

const Cards = (data) => {
	return (
		<div className="mod_cards" id="cards">
			<section className="section">
				<div className="container">
					<h2 className="cards__title">Anwendungsbereiche</h2>
					<div className="columns">
							<div className="column is-half-tablet is-one-third-desktop is-flex">
									<Card title={data.data.card_1_title} image={data.data.card_1_image} imageAlt={data.data.card_1_imageAlt}
										  content={data.data.card_1_content} link={data.data.card_1_link} />
							</div>
							<div className="column is-half-tablet is-one-third-desktop is-flex">
									<Card title={data.data.card_2_title} image={data.data.card_2_image} imageAlt={data.data.card_2_imageAlt}
										  content={data.data.card_2_content} link={data.data.card_2_link} />
							</div>
							<div className="column is-half-tablet is-one-third-desktop is-flex">
									<Card title={data.data.card_3_title} image={data.data.card_3_image} imageAlt={data.data.card_3_imageAlt}
										  content={data.data.card_3_content} link={data.data.card_3_link}/>
							</div>
					</div>
					<div className="columns">
						<div className="column is-half-tablet is-one-third-desktop is-flex">
							<Card title={data.data.card_4_title} image={data.data.card_4_image} imageAlt={data.data.card_4_imageAlt}
								  content={data.data.card_4_content} link={data.data.card_4_link}/>
						</div>
						<div className="column is-half-tablet is-one-third-desktop is-flex">
							<Card title={data.data.card_5_title} image={data.data.card_5_image} imageAlt={data.data.card_5_imageAlt}
								  content={data.data.card_5_content} link={data.data.card_5_link}/>
						</div>
						<div className="column is-half-tablet is-one-third-desktop is-flex">
							<Card title={data.data.card_6_title} image={data.data.card_6_image} imageAlt={data.data.card_6_imageAlt}
								  content={data.data.card_6_content} link={data.data.card_6_link}/>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Cards
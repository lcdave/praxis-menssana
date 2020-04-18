import React from "react"
import "./_form.scss"

const encode = (data) => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&")
}

class ContactForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			lastname: "",
			email: "",
			message: "",
			formState: 'is-visible',
			formSendNotificationState: 'is-hidden'
		}
	}

	handleSubmit = e => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...this.state }),
		})
			.then(
				() => this.setState({
					formState: 'is-hidden',
					formSendNotificationState: 'is-visible',
				})
			)
			.catch(error => alert(error))

		e.preventDefault()
	}

	handleChange = e => this.setState({ [e.target.name]: e.target.value })

	render() {
		const { name, lastname, email, message } = this.state
		return (
			<>
				<div className={`mod_form ${this.state.formSendNotificationState}`}>
					<h2>Vielen Dank! Ihre Nachricht wurde versendet!</h2>
				</div>
				<form className={`mod_form ${this.state.formState}`} name="contact" method="POST" data-netlify="true"
					  onSubmit={this.handleSubmit}>
					<h2>Termin vereinbaren / Kontaktieren Sie mich</h2>

					<div className="field">
						<label className="label" id="name">Vorname
							<div className="control">
								<input className="input" type="text" name="name" value={name}
									   onChange={this.handleChange}/>
							</div>
						</label>
					</div>
					<div className="field">
						<label className="label" id="lastname">Nachname
							<div className="control">
								<input className="input" type="text" name="lastname" value={lastname}
									   onChange={this.handleChange}/>
							</div>
						</label>
					</div>
					<div className="field">
						<label className="label" id="email">E-Mail
							<div className="control">
								<input className="input" type="email" required="required" name="email" value={email}
									   onChange={this.handleChange}/>
							</div>
						</label>
					</div>
					<div className="field">
						<label className="label" id="message">Ihre Nachricht
							<div className="control">
								<textarea className="textarea" name="message" value={message}
										  onChange={this.handleChange}/>
							</div>
						</label>
					</div>
					<div className="field">
						<div className="control">
							<label className="checkbox">
								<input type="checkbox"/>
								<span className="checkbox__label"> Ich habe die <a href="#">Datenschutzerklärung</a> zur Kenntnis genommen und erkläre mich damit einverstanden.</span>
							</label>
						</div>
					</div>
					<div className="field">
						<div className="control">
							<button className="button is-light" type="submit">Senden</button>
						</div>
					</div>
				</form>
			</>
		)
	}
}

export default ContactForm
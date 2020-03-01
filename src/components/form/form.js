import React from "react"
import "./_form.scss"

const Form = () => {
	return (
		<form className="mod_form">
			<div className="field">
				<label className="label">Vorname</label>
				<div className="control">
					<input className="input" type="text" />
				</div>
			</div>
			<div className="field">
				<label className="label">Nachname</label>
				<div className="control">
					<input className="input" type="text" />
				</div>
			</div>
			<div className="field">
				<label className="label">E-Mail</label>
				<div className="control">
					<input className="input" type="email" required="required" />
				</div>
			</div>
			<div className="field">
				<label className="label">Ihre Nachricht</label>
				<div className="control">
					<textarea className="textarea" />
				</div>
			</div>
			<div className="field">
				<div className="control">
					<label className="checkbox">
						<input type="checkbox" />
						<span className="checkbox__label"> Ich habe die <a href="#">Datenschutzerklärung</a> zur Kenntnis genommen und erkläre mich damit einverstanden.</span>
					</label>
				</div>
			</div>
			<div className="field">
				<div className="control">
					<button className="button">Senden</button>
				</div>
			</div>
		</form>
	)
}

export default Form
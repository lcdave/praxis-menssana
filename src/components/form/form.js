import React from "react"
import "./_form.scss"

const Form = () => {
	return (
		<form className="mod_form">
			<div className="field">
				<label className="label">Name</label>
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
				<label className="label">Message</label>
				<div className="control">
					<textarea className="textarea" />
				</div>
			</div>
			<div className="field">
				<div className="control">
					<label className="checkbox">
						<input type="checkbox" />
						<span className="checkbox__label"> I agree to the <a href="#">terms and conditions</a></span>
					</label>
				</div>
			</div>
			<div className="field">
				<div className="control">
					<button className="button is-link">Senden</button>
				</div>
			</div>
		</form>
	)
}

export default Form
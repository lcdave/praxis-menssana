import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'
import ReactGA from 'react-ga';
import "./_cookiebanner.scss"

class CookieBanner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cookieBanner: false
		};

		this.allowCookies = this.allowCookies.bind(this);
		this.showCookieBanner = this.showCookieBanner.bind(this);
		this.hideCookieBanner = this.hideCookieBanner.bind(this);
		this.declineCookies = this.declineCookies.bind(this);
	}
	render() {
		if (this.state.cookieBanner) {
			return (
				<div className="mod_cookie-banner">
					<div className="cookie-banner-text">
						Cookies werden zur Benutzerführung und Webanalyse verwendet und helfen dabei, diese Webseite zu
						optimieren. Wenn Sie der Verwendung von Cookies zustimmen, klicken Sie bitte auf „Akzeptieren“. Weitere
						Informationen finden Sie auf unserer Datenschutzerklärung.
					</div>
					<div className="cookie-banner-cta-container">
						<div onClick={this.allowCookies} className="cookie-banner-cta button is-small is-light">
							Akzeptieren
						</div>
						<div onClick={this.declineCookies} className="cookie-banner-cta button is-small is-light">
							Ablehnen
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<></>
			)
		}
	}

	componentWillMount() {
		if (!(Cookies.get('cookiesAccepted')) && !(Cookies.get('cookiesDeclined'))) {
			this.showCookieBanner()
		}
		if (Cookies.get('cookiesAccepted')) {
			ReactGA.initialize('UA-163840641-1');
			ReactGA.pageview(window.location.pathname + window.location.search);
		}
	}

	allowCookies() {
		this.hideCookieBanner();
		Cookies.set('cookiesAccepted', 'true', { expires: 365, path: '/' });
		ReactGA.initialize('UA-163840641-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	declineCookies() {
		this.hideCookieBanner();
		Cookies.set('cookiesDeclined', 'true', { expires: 7, path: '/' });
	}

	showCookieBanner() {
		this.setState({
			cookieBanner: true
		});
	}

	hideCookieBanner() {
		this.setState({
			cookieBanner: false
		});
	}
}

export default CookieBanner
import React, { Component } from 'react';
import { setupScrollReveal } from '../../assets/js/main.js';
import AppStore from '../../assets/img/app-store-icon.png';
import PlayStore from '../../assets/img/google-play-icon.png';

import NewsletterForm from '../forms/NewsletterForm';

class Hero extends Component {
	componentDidMount() {
		setupScrollReveal();
	}

	render() {
		const { title, content, illustration: Illustration } = this.props;

		return (
			<section className="hero">
				<div className="container">
					<div className="hero-inner">
						<div className="hero-copy">
							<div className="container-sm">
								<h1 className="hero-title h2-mobile mt-0 is-revealing">
									{title}
								</h1>
								<p className="hero-paragraph is-revealing">{content}</p>
							</div>

							<NewsletterForm className="hero-form" submit="Visit Webstore" />
						<div className="container">
							<br/> <br/> <br/>
						<h3 className="hero-title">Coming real soon on</h3> <br />
						<a style={{margin:"10px"}} data-wow-delay="0.25s"  /><img class="app-store-btn" src={AppStore} alt="App Store Icon"/> 
						<a style={{margin:"10px"}} data-wow-delay="0.67s" /><img class="google-play-btn" src={PlayStore} alt="Google Play Icon"/>
				
						</div>
				
						</div>
						
						<div className="hero-illustration">
							<Illustration />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Hero;

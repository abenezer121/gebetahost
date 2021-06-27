import React, { Component } from 'react';
import { setupScrollReveal } from '../../assets/js/main.js';

class AboutHero extends Component {
	componentDidMount() {
		setupScrollReveal();
	}

	render() {
		const {  illustration: Illustration } = this.props;

		return (
			<section className="hero">
				<div className="container">
					<div className="hero-inner">
						<div className="hero-copy">
                        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">About</h1>
                </header>

                <div className="entry-body">
                  <p>
                   Gebeta is an online food delivery system. <br></br> What gebeta brings to the table is literally being your virtual kitchen serving your food and drink needs as quick and cheap as possible

                  </p>
                  <p>
                  
                More description here


                  </p>
                  <hr />
                  <p>
                    Telegram Bot link:{" "}
                    <a href="https://t.me/gebetaBot">
                      https://t.me/gebetaBot
                    </a>
                  </p>
                  <hr />
                  <p> Gebeta 2021 All rights reserved.  </p>
                </div>
              </div>
            </div>
            {/* <div className="entry-media">
              <img src="https://placehold.it/420x640" alt="" />
            </div> */}
          </div>
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

export default AboutHero;

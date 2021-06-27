import React, { Component } from 'react';
import classnames from 'classnames';
import { Link , withRouter, Redirect} from "react-router-dom";

class NewsletterForm extends Component {
	constructor(props) {
		super(props);
		this.state = { email: '' };
	}

	render() {
		const { className, submit = 'Submit' } = this.props;
		const { email } = this.state;

		return (
			<form
				className={classnames(
					'newsletter-form field field-grouped is-revealing',
					className
				)}
			>
				<div className="control">
					<button style={{color:"#ffd800"}}
						className="button button-primary button-block button-shadow"
						type="button"
					>
						Telegram Bot
					</button>
				</div>
				
       
				<div className="control">
					<Link to='/login'>
					<button
						
						className="button button-primary button-block button-shadow"
						type="button">
						{submit}
					</button>
					 </Link>
				</div>
			</form>
		);
	}
}

export default NewsletterForm;

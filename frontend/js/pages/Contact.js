import React from 'react';

import { Element } from 'react-scroll';

import ContactData from '../data/ContactData';

import LinkedinImg from '../../img/linkedin.png';
import GithubImg from '../../img/github.png';
import MailImg from '../../img/email.png';

class Contact extends React.Component {
	render() {
		return (
			<Element name="contact" className="container">
				<div className="w16 content">
					<div className="content__text">
						<span>Find me in :</span>

						<span className="contact">
							<a href={ContactData.linkedin_url} target='_blank'>
								<img src={LinkedinImg} />
							</a>
							<a href={`mailto:${ContactData.email_url}`} target='_blank'>
								<img src={MailImg} />
							</a>
							<a href={ContactData.github_url} target='_blank'>
								<img src={GithubImg} />
							</a>
						</span>
					</div>
				</div>
			</Element>
		);
	}
}

export default Contact;
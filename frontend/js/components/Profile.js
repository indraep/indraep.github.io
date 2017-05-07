/**
 * Created by indra.e.prasetya on 5/2/2017.
 */
import React from "react";
import browserHistory from 'react-router/lib/browserHistory';

class Profile extends React.Component {
	constructor() {
		super();
	}

	changePages(e) {
		e.preventDefault();

        browserHistory.push(e.target.getAttribute('href'));
	}

	render() {
		return (
			<div>
				<h1>Profile</h1>

				<a onClick={this.changePages.bind(this)} href="/profile/1">Profile 1</a><br/>
				<a onClick={this.changePages.bind(this)} href="/profile/2">Profile 2</a>

				{this.props.children}
			</div>
		);
	}
}

export default Profile;
import React from 'react';

class Homepage extends React.Component {
	constructor() {
		super();
	}

	componentWillMount() {
		console.log('componentWillMount');
	}

	changePage(e) {
		e.preventDefault();
	
		this.props.history.push(e.target.getAttribute('href'));
	}

	render() {
		return (
			<div>
				<h3>Homepage</h3>

				<a onClick={this.changePage.bind(this)} href="index.html#best-new">Best new</a>
			</div>
		);
	}
}

export default Homepage;
import React from 'react';
import { Element } from 'react-scroll';

class Homepage extends React.Component {
	render() {
		return (
			<Element name="home" className="element" >
				<div className='content'>
					<div className='w3'>a</div>
					<div className='w9'>b</div>
				</div>
			</Element>
		);
	}
}

export default Homepage;
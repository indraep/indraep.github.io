import React from 'react';
import { Element } from 'react-scroll';

class Homepage extends React.Component {
	render() {
		return (
			<Element name="home" className="element" >
				<div className='content'>
					<div className='w4'>a</div>
					<div className='w12'>b</div>
				</div>
			</Element>
		);
	}
}

export default Homepage;
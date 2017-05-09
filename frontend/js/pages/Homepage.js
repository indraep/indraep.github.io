import React from 'react';
import { Element } from 'react-scroll';

class Homepage extends React.Component {
	render() {
		return (
			<Element name="home" className="container" >
				<div className='w4 content'>
					<div className='content__text'>foto</div>
				</div>
				<div className="w12 content">
					<div className='content__text'>Indra Eka Prasetya</div>
				</div>
			</Element>
		);
	}
}

export default Homepage;
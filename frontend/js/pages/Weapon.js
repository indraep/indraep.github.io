import React from 'react';

import { Element } from 'react-scroll';

class Weapon extends React.Component {
	render() {
		return (
			<Element name="weapon" className="container">
				<div className="w7 content">
					<div className="content__text">a</div>
				</div>
				<div className='w2 content'>
					<div className="content__separator"></div>
				</div>
				<div className="w7 content">
					<div className="content__text">b</div>
				</div>
			</Element>
		);
	}
}

export default Weapon;
import React from 'react';

import { Element } from 'react-scroll';

class Weapon extends React.Component {
	render() {
		return (
			<Element name="weapon" className="element">
				<div className="content">
					<div className='w7'>a</div>
					<div className='w2 separator'></div>
					<div className='w7'>b</div>
				</div>
			</Element>
		);
	}
}

export default Weapon;
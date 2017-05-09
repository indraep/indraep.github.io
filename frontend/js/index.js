import '../css/icon.scss';
import '../css/grid.scss';
import '../css/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Element, Events, scroll, scrollSpy } from 'react-scroll';

import Navigation from './Navigation';

import Homepage from './pages/Homepage';
import Weapon from './pages/Weapon';
import Stuff from './pages/Stuff';
import Work from './pages/Work';
import Education from './pages/Education';
import Award from './pages/Award';
import Contact from './pages/Contact';

var durationFn = function(deltaTop) {
	return deltaTop;
};

class Section extends React.Component{

	constructor (props){
		super(props);
	}

	componentDidMount() {
		Events.scrollEvent.register('begin', function() {
			console.log("begin", arguments);
		});

		Events.scrollEvent.register('end', function() {
			console.log("end", arguments);
		});

		scrollSpy.update();
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	render () {
		return (
			<div>
				<Navigation />

				<Homepage />
				<Weapon />
				<Stuff />
				<Work />
				<Education />
				<Award />
				<Contact />
			</div>
		);
	}
};


ReactDOM.render(
	<Section />,
	document.getElementById('container')
);
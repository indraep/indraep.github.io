import '../css/style.scss';
import '../css/grid.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Element, Events, scroll, scrollSpy } from 'react-scroll';

import Homepage from './pages/Homepage';
import Weapon from './pages/Weapon';
import Stuff from './pages/Stuff';
import Work from './pages/Work';
import Education from './pages/Education';

var durationFn = function(deltaTop) {
	return deltaTop;
};

class Section extends React.Component{

	constructor (props){
		super(props);
		this.scrollToTop = this.scrollToTop.bind(this);
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
	scrollToTop() {
		scroll.scrollToTop();
	}
	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}
	render () {
		return (
			<div>
				<div>
					<ul className='navigation'>
						<li>
							<Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >
								Home
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="weapon" spy={true} smooth={true} duration={500}>
								Weapon
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="stuff" spy={true} smooth={true} duration={500} >
								Stuff
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="work" spy={true} smooth={true} duration={500}>
								Work
							</Link>
						</li>
						<li>
							<Link activeClass="active" to="education" spy={true} smooth={true} duration={500}>
								Education
							</Link>
						</li>
					</ul>
				</div>

				<Homepage />
				<Weapon />
				<Stuff />
				<Work />
				<Education />
			</div>
		);
	}
};


ReactDOM.render(
	<Section />,
	document.getElementById('container')
);
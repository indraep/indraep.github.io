import React from 'react';

import { Link, Element, Events, scroll, scrollSpy } from 'react-scroll';

class Navigation extends React.Component {
	render() {
		return (
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
					<li>
						<Link activeClass="active" to="award" spy={true} smooth={true} duration={500}>
							Award
						</Link>
					</li>
					<li>
						<Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navigation;
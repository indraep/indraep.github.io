import React from 'react';

import { Link, Element, Events, scroll, scrollSpy } from 'react-scroll';

class Navigation extends React.Component {
	render() {
		return (
			<div>
				<ul className='navigation'>
					<li>
						<Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >
							<i className="icon icon__name"></i>
						</Link>
					</li>
					<li>
						<Link activeClass="active" to="weapon" spy={true} smooth={true} duration={500}>
							<i className="icon icon__skill"></i>
						</Link>
					</li>
					<li>
						<Link activeClass="active" to="stuff" spy={true} smooth={true} duration={500} >
							<i className="icon icon__project"></i>
						</Link>
					</li>
					<li>
						<Link activeClass="active" to="work" spy={true} smooth={true} duration={500}>
							<i className="icon icon__work"></i>
						</Link>
					</li>
					<li>
						<Link activeClass="active" to="education" spy={true} smooth={true} duration={500}>
							<i className="icon icon__education"></i>
						</Link>
					</li>
					<li>
						<Link activeClass="active" to="award" spy={true} smooth={true} duration={500}>
							<i className="icon icon__award"></i>
						</Link>
					</li>
					<li>
						<Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
							<i className="icon icon__contact"></i>
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navigation;
/*
	external imports
*/

import React, {PropTypes} from 'react';
import { Link } from 'react-router';

/*
	internal imports
*/



/*
	stateless component
*/

const Layout = (props) => (
	<div>
		<header>
			<nav className="db dt-l w-100 border-box pa3 ph5-l">
				<a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
					<img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
				</a>
				<div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
					<a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Home">Home</a>
					<a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="How it Works">How it Works</a>
					<a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Blog">Blog</a>
					<a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Press">Press</a>
					<a className="link dim dark-gray f6 f5-l dib" href="#" title="Contact">Contact</a>
				</div>
			</nav>
		</header>
		
		<div className="cf">
			<div className="fl w-50 bg-near-white tc">
				<h1>Column One</h1>
			</div>
			<div className="fl w-50 bg-light-gray tc">
				<h1>Column Two</h1>
			</div>
		</div>

		<footer className="pv4 ph3 ph5-m ph6-l mid-gray">
			<small className="f6 db tc">© 2016 <b className="ttu">Speedy IDE</b>., All Rights Reserved</small>
			<div className="tc mt3">
				<a href="/language/" title="Language" className="f6 dib ph2 link mid-gray dim">Language</a>
				<a href="/terms/"    title="Terms" className="f6 dib ph2 link mid-gray dim">Terms of Use</a>
				<a href="/privacy/"  title="Privacy" className="f6 dib ph2 link mid-gray dim">Privacy</a>
			</div>
		</footer>
	</div>
);

/*
	PropTypes
	
	These are the required properties for the stateless component
	defined above. Accepted values are:
	- string
	- func
	- bool
	...
*/

Layout.propTypes = {

}

export default Layout;

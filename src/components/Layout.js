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
    <div>
			Speedy IDE
    </div>
  </header>
  <div className="content">
    {props.children}
  </div>
  <footer>
    <div>
      Copyright (c) 2016
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

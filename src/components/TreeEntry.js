/*
	external imports
*/

import React, {PropTypes} from 'react';

/*
	internal imports
*/

/*
	stateless component
*/

const TreeEntry = (props) => (
	<li>
		{props.name}
		{props.children && 
			<ul className="list pa1 pl3">
				{props.children.map((entry, i) => {
					return(
						<TreeEntry level={props.level + 1} children={entry.children} name={entry.name} key={i} />
					)
				})}
			</ul>
		}
	</li>
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

TreeEntry.propTypes = {
	level: PropTypes.number.isRequired
}

export default TreeEntry;

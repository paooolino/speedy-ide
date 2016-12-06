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
		<a onClick={() => props.click_handler(props)}  style={{
				paddingLeft: props.level * 10
			}} 
			className={'db pointer hover-bg-white bb b--black-20 lh-copy f6' + ((props.selectedEntry==props.id) ? ' bg-light-yellow' : '')}
		>
			{props.name}
		</a>
		{props.children && 
			<ul className="list pa0 pl0">
				{props.children.map((entry, i) => {
					return(
						<TreeEntry
							id={entry.id} 
							selectedEntry={props.selectedEntry} 
							click_handler={props.click_handler} 
							level={props.level + 1} 
							children={entry.children} 
							name={entry.name} 
							key={entry.id} 
							filepath={entry.filepath}
						/>
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
	level: PropTypes.number.isRequired,
	click_handler: PropTypes.func.isRequired,
	selectedEntry: PropTypes.string.isRequired
}

export default TreeEntry;

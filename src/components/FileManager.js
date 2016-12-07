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

const FileManager = (props) => (
	<div className="pa3">
		{
			props.children.map((entry)=>(
				<div className="tc fl mr2 dim pointer" key={entry.id}>
					<div className="">
						{
							(entry.children) ? 
							<img src="assets/folder-big.png" /> : 
							<img src="assets/file-big.png" />
						}
					</div>
					<div className="">{entry.name}</div>
				</div>
			))
		}
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

FileManager.propTypes = {
	children: PropTypes.array.isRequired
}

export default FileManager;

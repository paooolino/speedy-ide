import React, { Component, PropTypes } from 'react';

class FileTree extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const level = this.props.level || 0;
		return (
			<ul className="list pa0 pl0">
				{this.props.nodes.map((entry, i) => {
					//console.log(entry.id);
					return (
						<li key={entry.id}>
							<a className="db pointer hover-bg-white bb b--black-20 lh-copy f6"
								style={{paddingLeft: level * 10}}
								>
								{entry.name}
							</a>
							{entry.children && 
								<FileTree level={level+1} nodes={entry.children} />
							}
						</li>
					)
				})}
			</ul>
		)
	}
};

FileTree.propTypes = {
	nodes: PropTypes.array.isRequired
};

export default FileTree;

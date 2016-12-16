import React, { Component, PropTypes } from 'react';

class FileTree extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openedChildren: props.nodes.map(()=>false)
		}
	}
	
	clickHandler(evt, i) {
		this.setState({
			openedChildren: this.state.openedChildren.map((v, index)=>{
				return index == i ? !v : v;
			})
		});
	}
	
	render() {
		const level = this.props.level || 0;
		return (
			<ul className={(this.props.isOpened ? '' : 'dn ') + 'list pa0 pl0'}>
				{this.props.nodes.map((entry, i) => {
					return (
						<li key={entry.id}>
							<a className="db pointer hover-bg-white bb b--black-20 lh-copy f6"
								onClick={(evt)=>{this.clickHandler(evt, i);}}
								style={{paddingLeft: level * 10}}
								>
								{entry.name}
							</a>
							{entry.children && 
								<FileTree isOpened={this.state.openedChildren[i]} level={level+1} nodes={entry.children} />
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

FileTree.defaultProps = {
	isOpened: true
}

export default FileTree;

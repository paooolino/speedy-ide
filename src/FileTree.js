import React, { Component, PropTypes } from 'react';

class FileTree extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const level = this.props.level || 0;
		return (
			<ul className={'list pa0 pl0'}>
				{this.props.nodes.map((entry, i) => {
					return (
						<li className={(this.props.openedFolders.indexOf(entry.id) > -1 ? 'opened ' : '') + (this.props.selectedLeaves.indexOf(entry.id) > -1 ? 'selected ' : '') + (entry.children ? 'is_folder ' : '')} key={entry.id}>
							<a className="db pointer hover-bg-white bb b--black-20 lh-copy f6"
								onClick={entry.children ? (evt)=>{this.props.onClickFolder(evt, entry);} : (evt)=>{this.props.onClickLeaf(evt, entry);}}					
								style={{paddingLeft: level * 10}}
								>
								{entry.name}
							</a>
							{entry.children && 
								<FileTree 
									nodes={entry.children} 
									openedFolders={this.props.openedFolders}
									selectedLeaves={this.props.selectedLeaves} 
									onClickLeaf={this.props.onClickLeaf} 
									onClickFolder={this.props.onClickFolder} 
									level={level+1} 
								/>
							}
						</li>
					)
				})}
			</ul>
		)
	}
};

FileTree.propTypes = {
	nodes: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		children: PropTypes.array
  })),
	openedFolders: PropTypes.array,
	selectedLeaves: PropTypes.array,
	onClickLeaf: PropTypes.func,
	onClickFolder: PropTypes.func
};

FileTree.defaultProps = {
	openedFolders: [],
	selectedLeaves: [],
	onClickLeaf: () => {},
	onClickFolder: () => {}
}

export default FileTree;

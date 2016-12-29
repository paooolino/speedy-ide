import React, { Component } from 'react';

import Layout from './Layout';
import FileTree from './FileTree';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			openedFolders: [],
			selectedLeaves: [],
			nodes: []
		};
	}
	
	componentWillMount() {
		this.setState({
			openedFolders: [],
			selectedLeaves: [],
			nodes: [
				{
					id: 1,
					name: "root",
					children: [{
						id: 2,
						"name": "file1"
					},{
						id: 3,
						"name": "file2"
					},{
						id: 4,
						"name": "dir",
						children: [{
							id: 5,
							name: "file3"
						}, {
							id: 6,
							name: "file4"
						}]
					}]
				}, {
					id: 7,
					name: "root2",
					children: [{
						id: 8,
						name: "children2"
					}]
				}
			]
		});
	}
	
	render() {
		return(
			<Layout 
				handlerPos={15}
				contentHeader={<span>Speedy</span>}
				contentLeft={<FileTree 
					nodes={this.state.nodes}
					openedFolders={this.state.openedFolders}
					selectedLeaves={this.state.selectedLeaves}
					onClickLeaf={(evt, entry)=>{
						this.setState({
							selectedLeaves: [entry.id]
						});
					}}		
					onClickFolder={(evt, entry)=>{
						this.setState({
							selectedLeaves: [entry.id],
							openedFolders: (() => (
								this.state.openedFolders.indexOf(entry.id) == -1 ? 
									// The folder is not opened yet: add to opened
									[...this.state.openedFolders, entry.id] : 
									// The folder is opened yet:
									this.state.openedFolders.filter((v)=>{
										// remove from opened only if is selected.
										return v == entry.id && this.state.selectedLeaves.indexOf(entry.id) > -1 ? false : true;
									})
							))()
						});
					}}					
				/>}
			/>
		);
	}
}

export default App;

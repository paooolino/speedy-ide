/*
	external imports
*/
import React, { Component } from 'react';
import path from 'path';

/*
	internal imports
*/
import config from '../config';
import Layout from './Layout';
import FileTree from './FileTree';

/*
	setup
*/
const API_ENDPOINT = config.SERVER_HOST + ':' + config.SERVER_PORT; 

/*
	component definition
*/

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			currentPath: '',
			openedFolders: [],
			nodes: []
		};
	}
	
	componentWillMount() {
		this.fetchData();
	}
	
	fetchData() {
		const the_path = path.join(config.PROJECT_ROOT, this.state.currentPath);
		fetch(API_ENDPOINT + '/?action=listFiles&path=' + the_path)
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					nodes: this.normalizeNodes(json)
				});
			});
	}
	
	normalizeNodes(json) {
		return json.map((entry) => {
			const item = {
				id: entry.name,
				name: entry.name
			}
			if (entry.isDirectory) {
				item.children = [];
			}
			return item;
		});
	}
	
	render() {
		return (
			<div className="h-100">
				<Layout
					handlerPos={15}
					contentLeft={
						<div className="h-100 overflow-container">
							<FileTree 
								nodes={this.state.nodes}
							/>
						</div>
					}
				/>
			</div>
		);
	}
}

export default App;

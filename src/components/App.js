import React, { Component } from 'react';

import Layout from './Layout';
import FileTree from './FileTree';

const nodes = [
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
];

class App extends Component {
	render() {
		return(
			<Layout 
				handlerPos={15}
				contentHeader={<span>Speedy</span>}
				contentLeft={<FileTree nodes={nodes} />}
			/>
		);
	}
}

export default App;

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
		};
	}
	
	componentWillMount() {
		/*
		const the_path = path.join(config.PROJECT_ROOT);
		fetch(API_ENDPOINT + '/?action=listFiles&path=' + the_path)
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
			});
		*/
	}
	
	render() {
		return (
			<div className="h-100">
				<Layout
					handlerPos={15}
					contentLeft={
						<FileTree 
							nodes={[{}]}
						/>
					}
				/>
			</div>
		);
	}
}

export default App;

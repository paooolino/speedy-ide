/*
	external imports
*/
import React, { Component } from 'react';

/*
	internal imports
*/
import Layout from './Layout';
import ButtonBar from './ButtonBar';
import Dialog from './Dialog';

/*
	component definition
*/
class App extends Component {
	
	constructor(props) {
		super(props);
	}
	
	componentWillMount() {
		//
	}
	
	render() {
		return (
			<div>
				<Layout 
					handlerPos={15}
					contentHeader={
						<div>
							<ButtonBar 
								buttons={[{
									name: "New project"
								},{
									name: "Close project"
								}]}
							/>
							<ButtonBar 
								buttons={[{
									name: "New folder"
								},{
									name: "New file"
								}]}
							/>
							<ButtonBar 
								buttons={[{
									name: "Delete file"
								},{
									name: "Move file"
								}]}
							/>
						</div>
					}
				/>
				<Dialog />
			</div>
		);
	}
}

export default App;

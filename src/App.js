/*
	external imports
*/
import React, { Component } from 'react';

/*
	internal imports
*/
import Layout from './Layout';

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
		//
	}
	
	render() {
		return (
			<div className="h-100">
				<Layout
					handlerPos={15}
				/>
			</div>
		);
	}
}

export default App;

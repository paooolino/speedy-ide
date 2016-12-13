import React, { Component } from 'react';

import Layout from './Layout';

class App extends Component {
	render() {
		return(
			<Layout 
				handlerPos={20}
				beginDrag={(evt)=>{
					console.log('beginDrag');
				}}
			/>
		);
	}
}

export default App;

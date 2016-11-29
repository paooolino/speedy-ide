/*
	external imports
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/*
	internal imports
*/

import * as actions_fs from '../redux/fs';
import * as actions_app from '../redux/app';

/*
	stateless component
*/

//##COMPONENT_HELPERFUNCTIONS##

class Layout extends Component {
	constructor(props) {
		super(props);
	}
	
	componentWillReceiveProps(nextProps) {
		//##COMPONENT_WILL_RECEIVE_PROPS##
	}
	
	componentWillMount() {
		this.props.fetchdir(this.props.appConfig.SERVER_PATH);
	}
	
	render() {
		return (
			<div>
				FileTree
			</div>
		);
	}
}

/*
	PropTypes
	
	These are the required properties for the stateless component
	defined above. Accepted values are:
	- string
	- func
	- bool
	...
*/

Layout.propTypes = {
}

/*
	dispatches
*/

const mapDispatchToProps = (dispatch) => ({
	fetchdir: (server_path) => {
		dispatch(actions_fs.fetchdir(server_path));
	}
});

/*
	state
*/

const mapStateToProps = (state) => ({
	appConfig: state.app.config
});

/*
	connect & export
*/

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Layout);

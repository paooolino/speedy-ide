/*
	external imports
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/*
	internal imports
*/

import TreeEntry from './TreeEntry';
import * as actions_fs from '../redux/fs';

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
		this.props.fetchdir(
			this.props.appConfig.SERVER_PATH,
			this.props.appConfig.SOURCE_DIR
		);
	}
	
	render() {
		return (
			<TreeEntry level={0} children={this.props.entries} name="root" />
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
	fetchdir: (server_path, source_dir) => {
		dispatch(actions_fs.fetchdir(server_path, source_dir));
	}
});

/*
	state
*/

const mapStateToProps = (state) => ({
	appConfig: state.app.config,
	entries: state.fs.entries
});

/*
	connect & export
*/

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Layout);

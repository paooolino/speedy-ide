/*
	external imports
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/*
	internal imports
*/

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
		this.props.fetchdir();
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
	fetchdir: () => {
		dispatch(actions_fs.fetchdir());
	}
});

/*
	state
*/

const mapStateToProps = (state) => ({

});

/*
	connect & export
*/

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Layout);

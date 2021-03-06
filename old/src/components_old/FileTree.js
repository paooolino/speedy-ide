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
			<ul className="list pl0">
				<TreeEntry
					selectedEntry={this.props.selectedEntry} 
					click_handler={(entry) => {this.props.click_handler(this.props.appConfig.SERVER_PATH, entry);}} 
					level={0} 
					children={this.props.entries}
					name="root" 
					id="0"
				/>
			</ul>
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

const mapDispatchToProps = (dispatch, ownProps) => ({
	fetchdir: (server_path, source_dir) => {
		dispatch(actions_fs.fetchdir(server_path, source_dir));
	},
	click_handler: (server_path, entry) => {
		dispatch(actions_fs.select_entry(entry));
		dispatch(actions_fs.loadfile(server_path, entry.filepath));
	}
});

/*
	state
*/

const mapStateToProps = (state) => ({
	entries: state.fs.entries,
	selectedEntry: state.fs.selectedEntry,
	appConfig: state.app.config
});

/*
	connect & export
*/

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Layout);

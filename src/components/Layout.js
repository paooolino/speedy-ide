/*
	external imports
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import brace from 'brace';
import 'brace/mode/html';
import 'brace/mode/javascript';
import 'brace/theme/github';
import AceEditor from 'react-ace';

/*
	internal imports
*/

import * as actions_app from '../redux/app';
import * as actions_ui from '../redux/ui';
import FileTree from './FileTree';

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
		this.props.loadConfig();
	}
	
	render() {
		if(this.props.appConfig) {
			return (
				<div id="Layout" className="h-100">
				
					<div className="HeaderHeight bg-gray">
					</div>
					<div 
						onMouseUp={this.props.end_drag}
						onMouseLeave={this.props.end_drag}
						onMouseMove={(evt) => {
							if(this.props.isDragging) {
								this.props.move_handler(evt.clientX);
							}
						}}
						className="ContentHeight bg-light-gray"
					>
						<div className="fl h-100 br b--light-silver" style={{width: this.props.handlerPos + '%'}}>
							<FileTree appConfig={this.props.appConfig} />
						</div>
						<div className="fl h-100 bl b--white" style={{width: (100 - this.props.handlerPos) + '%'}}>
							<AceEditor
								mode="html"
								width="100%"
								height="100%"
								theme="github"
								tabSize={2}
								value={this.props.loadedFileContent}
								editorProps={{$blockScrolling: true}}
							/>
						</div>
						<div 
							onMouseDown={this.props.begin_drag} 
							className="ResizeHandler absolute h-100" 
							style={{left: this.props.handlerPos + '%'}}
						>
						</div>
					</div>
				</div>
			);
		} else {
			return <div>Loading config...</div>
		}
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
	begin_drag: (evt) => {
		dispatch(actions_ui.begin_drag());
		evt.preventDefault();
	},
	end_drag: (evt) => {
		dispatch(actions_ui.end_drag());
	},
	move_handler: (posX) => {
		dispatch(actions_ui.set_handler_pos((posX/window.innerWidth)*100));
	},
	loadConfig: () => {
		dispatch(actions_app.loadconfig());
	}
});

/*
	state
*/

const mapStateToProps = (state) => ({
	handlerPos: state.ui.handlerPos,
	isDragging: state.ui.isDragging,
	appConfig: state.app.config,
	loadedFileContent: state.fs.loadedFileContent
});

/*
	connect & export
*/

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Layout);

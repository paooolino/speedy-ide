/*
	external imports
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/*
	internal imports
*/

import * as actions_ui from '../redux/ui';
//##HELPER_COMPONENTS##

/*
	stateless component
*/

//##COMPONENT_HELPERFUNCTIONS##

class Layout extends Component {
	constructor(props) {
		super(props);
	}
	
	componentWillMount() {
		this.props.onResize();
	}
	
	componentWillReceiveProps(nextProps) {
		//##COMPONENT_WILL_RECEIVE_PROPS##
	}
	
	componentDidMount() {
		window.addEventListener("resize", this.props.onResize);
	}
	
	render() {
		return (
			<div id="Layout" className="h-100">
				<div className="bg-gray" style={{height: this.props.headerHeight}}>
				</div>
				<div className="bg-light-gray" style={{height: this.props.contentHeight}}>
					<div className="fl tc h-100 br b--light-silver" style={{width: this.props.leftWidth}}>
					</div>
					<div className="fl tc h-100 bl b--white" style={{width: this.props.rightWidth}}>
					</div>
					<div className="absolute h-100 w1 bg-red" onDrag={this.props.onResizePanels} style={{cursor: 'col-resize', left: this.props.leftWidth, marginLeft: '-0.5rem'}}>
					</div>
				</div>
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
	headerHeight: PropTypes.number.isRequired,
	contentHeight: PropTypes.number.isRequired,
	leftWidth: PropTypes.number.isRequired,
	rightWidth: PropTypes.number.isRequired
}

/*
	dispatches
*/

const mapDispatchToProps = (dispatch) => ({
	onResize: (evt) => {
		const headerHeight = 80;
		const leftWidth = 300;
		dispatch(actions_ui.resize_layout(
			headerHeight, 
			window.innerHeight - headerHeight,
			leftWidth,
			window.innerWidth - leftWidth
		));
	},
	onResizePanels: (evt) => {
		console.log(evt.clientX);
	}
});

/*
	state
*/

const mapStateToProps = (state) => ({
	headerHeight: state.ui.headerHeight,
	contentHeight: state.ui.contentHeight,
	leftWidth: state.ui.leftWidth,
	rightWidth: state.ui.rightWidth
});

/*
	connect & export
*/

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Layout);

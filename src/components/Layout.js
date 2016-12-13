import React, { Component, PropTypes } from 'react';

const Layout = (props) => {
	return (
		<div id="Layout" className="h-100">
			<div className="HeaderHeight bg-gray">
				header
			</div>
			<div className="fl h-100 br b--light-silver" style={{width: props.handlerPos + '%'}}>
				sx
			</div>
			<div className="fl h-100 bl b--white" style={{width: (100 - props.handlerPos) + '%'}}>
				dx
			</div>
			<div
				onMouseDown={props.beginDrag}
				className="ResizeHandler absolute h-100" 
				style={{left: props.handlerPos + '%'}}
			>
			</div>
		</div>
	)
};

Layout.propTypes = {
	// The horizontal position of the handler. An integer between 1 and 99.
	handlerPos: PropTypes.number.isRequired,
	//
	beginDrag: PropTypes.func
};

export default Layout;

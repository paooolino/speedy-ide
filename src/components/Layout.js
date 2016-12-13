import React, { Component } from 'react';

const Layout = (props) => (
	<div id="Layout" className="h-100">
		<div className="HeaderHeight bg-gray">
			header
		</div>
		<div className="fl h-100 br b--light-silver" style={{width: 50 + '%'}}>
			sx
		</div>
		<div className="fl h-100 bl b--white" style={{width: 50 + '%'}}>
			dx
		</div>
		<div 
			className="ResizeHandler absolute h-100" 
			style={{left: 50 + '%'}}
		>
		</div>
	</div>
);

export default Layout;

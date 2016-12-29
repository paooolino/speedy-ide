import React, { Component, PropTypes } from 'react';

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDragging: false,
			handlerPos: props.handlerPos
		};
	}
	
	startDrag(evt) {
		this.setState({isDragging: true});
		evt.preventDefault();
	}
	
	endDrag() {
		this.setState({isDragging: false});
	}
	
	mouseMove(evt) {
		if(this.state.isDragging) {
			let perc = (evt.clientX/window.innerWidth)*100;
			if(perc < 1) perc = 1;
			if(perc >99) perc = 99;
			this.setState({handlerPos:perc});
		}
	}
	
	render() {
		return (
			<div id="Layout" className="h-100">
			
				<div className="HeaderHeight bg-gray">
					{this.props.contentHeader}
				</div>
				
				<div className="ContentHeight bg-light-gray"
					onMouseUp={this.endDrag.bind(this)}
					onMouseLeave={this.endDrag.bind(this)}
					onMouseMove={this.mouseMove.bind(this)}
					>
					<div className="fl h-100 br b--light-silver" style={{width: this.state.handlerPos + '%'}}>
						{this.props.contentLeft}
					</div>
					<div className="fl h-100 bl b--white" style={{width: (100 - this.state.handlerPos) + '%'}}>
						{this.props.contentRight}
					</div>
					<div className="ResizeHandler absolute h-100" 
						onMouseDown={this.startDrag.bind(this)}
						style={{left: this.state.handlerPos + '%'}}
						>
					</div>
				</div>
				
			</div>
		)
	}
};

Layout.propTypes = {
	// The initial position of the resize handler. An integer between 1 and 99.
	handlerPos: PropTypes.number.isRequired,
	// The content slots.
	contentHeader: PropTypes.object,
	contentLeft: PropTypes.object,
	contentRight: PropTypes.object
};

export default Layout;

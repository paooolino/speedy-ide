import React, { Component, PropTypes } from 'react';

class Dialog extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="DialogContainer fixed top-0 left-0 w-100 h-100 bg-white-70">
				<div className="DialogInner pa5 tc">
					<div className="DialogContent">
						{this.props.content}
					</div>
					<div className="DialogBar">
						<button onClick={this.props.onCancel}>Cancel</button>
						<button onClick={this.props.onOk}>OK</button>
					</div>
				</div>
			</div>
		);
	}
}

Dialog.propTypes = {
	onCancel: PropTypes.func.isRequired,
	onOk: PropTypes.func.isRequired
};

export default Dialog;

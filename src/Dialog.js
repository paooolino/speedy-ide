import React, { Component, PropTypes } from 'react';

class Dialog extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="DialogContainer">
				<div className="DialogInner">
					<div className="DialogContent">
					</div>
					<div className="DialogBar">
						<button>Cancel</button><button>OK</button>
					</div>
				</div>
			</div>
		);
	}
}

Dialog.propTypes = {
};

export default Dialog;

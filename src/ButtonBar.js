import React, { Component, PropTypes } from 'react';

class ButtonBar extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="ButtonBarContainer fl mr3">
				{
					this.props.buttons.map((entry, i) => {
						return (
							<button 
								onClick={entry.callback} 
								key={i}
								disabled={entry.enabled ? '' : 'disabled'}
								>
								{entry.name}
							</button>
						);
					})
				}
			</div>
		);
	}
}

ButtonBar.propTypes = {
	buttons: PropTypes.array.isRequired
};

export default ButtonBar;

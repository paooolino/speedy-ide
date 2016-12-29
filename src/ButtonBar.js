import React, { Component, PropTypes } from 'react';

class ButtonBar extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="ButtonBarContainer">
				{
					this.props.buttons.map((entry, i) => {
						return (
							<button key={i}>{entry.name}</button>
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

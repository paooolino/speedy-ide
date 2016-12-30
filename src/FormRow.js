import React, { Component, PropTypes } from 'react';

class FormRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}
	
	render() {
		return (
			<div className="FormRow">
				<div className="formLabel">
					{this.props.label}
				</div>
				<div className="formRow">
					{(() => {
							switch (this.props.type) {
								case 'text':
									return <input type="text" onChange={this.props.onChange.bind(this)} value={this.props.value} />
							}
						})()
					}
				</div>
			</div>
		);
	}
}

FormRow.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
};

export default FormRow;

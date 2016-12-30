/*
	external imports
*/
import React, { Component } from 'react';

/*
	internal imports
*/
import Layout from './Layout';
import ButtonBar from './ButtonBar';
import Dialog from './Dialog';
import FormRow from './FormRow';
import FileTree from './FileTree';

/*
	component definition
*/
class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			newProjectPopupVisible: false,
			newProjectName: '',
			projectsList: []
		};
	}
	
	componentWillMount() {
		//
	}
	
	changeNewProjectName(evt) {
		this.setState({
			newProjectName: evt.target.value
		});
	}
	
	showNewProjectPopup() {
		this.setState({
			newProjectPopupVisible: true
		});
	}
	
	hideNewProjectPopup() {
		this.setState({
			newProjectPopupVisible: false
		});
	}
	
	createNewProject() {
		this.setState({
			newProjectPopupVisible: false,
			projectsList: [...this.state.projectsList, {
				id: this.state.newProjectName,
				name: this.state.newProjectName
			}],
			newProjectName: ''
		});
	}
	
	render() {
		return (
			<div>
				<Layout 
					handlerPos={15}
					contentHeader={
						<div>
							<ButtonBar 
								buttons={[{
									name: "New project",
									callback: this.showNewProjectPopup.bind(this)
								},{
									name: "Close project"
								}]}
							/>
							<ButtonBar 
								buttons={[{
									name: "New folder"
								},{
									name: "New file"
								}]}
							/>
							<ButtonBar 
								buttons={[{
									name: "Delete file"
								},{
									name: "Move file"
								}]}
							/>
						</div>
					}
					contentLeft={<FileTree 
						nodes={this.state.projectsList}
					/>}
				/>
				{this.state.newProjectPopupVisible &&
					<Dialog 
						name="newProjectPopup"
						content={
							<div>
								<FormRow 
									label="Project name"
									type="text"
									value={this.state.newProjectName}
									onChange={this.changeNewProjectName.bind(this)}
								/>
							</div>
						}
						onCancel={this.hideNewProjectPopup.bind(this)}
						onOk={this.createNewProject.bind(this)}
					/>
				}
			</div>
		);
	}
}

export default App;

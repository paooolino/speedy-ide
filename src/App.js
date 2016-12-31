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
const PROJECT_MODE = 'PROJECT_MODE';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			newProjectPopupVisible: false,
			newProjectName: '',
			projectsList: [],
			currentMode: '',
			openedProject: {}
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
	
	openProject(evt, entry) {
		this.setState({
			openedProject: Object.assign({}, entry),
			currentMode: PROJECT_MODE
		});
	}
	
	closeProject() {
		this.setState({
			openedProject: {},
			currentMode: ''
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
			<div className="h-100">
				<Layout 
					handlerPos={15}
					contentHeader={
						<div>
							<ButtonBar 
								buttons={[{
									name: "New project",
									callback: this.showNewProjectPopup.bind(this),
									enabled: (this.state.currentMode == '') ? true : false
								},{
									name: "Close project",
									callback: this.closeProject.bind(this),
									enabled: (this.state.currentMode == PROJECT_MODE) ? true : false
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
					contentLeft={(() => {
						switch(this.state.currentMode) {
							case '':
								return (
									<div>
										<p>Projects List</p>
										<FileTree 
											title="Project list"
											nodes={this.state.projectsList}
											onClickLeaf={this.openProject.bind(this)}
										/>
									</div>
								);
							case PROJECT_MODE:
								return (
									<div>
										<p>{this.state.openedProject.name}</p>
										<FileTree 
											nodes={[]}
										/>
									</div>
								);
						}
					})()}
					contentRight={<div>right</div>}
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

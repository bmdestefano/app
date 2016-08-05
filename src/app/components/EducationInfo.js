import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Avatar from 'material-ui/Avatar';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

import AddSchoolIcon from 'material-ui/svg-icons/content/add';

let availableSchoolsForSearch = ["Boston College", "Northeastern University", "Skidmore College"];
const availableSchools = [
	{id: 1, name: "Boston College", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/BostonCollegeEagles.svg/1128px-BostonCollegeEagles.svg.png"},
	{id: 2, name: "Northeastern University", logo: "http://www.kaplanconstructs.com/wp-content/uploads/2015/11/northeasternuniversity_logoseal.png"},
	{id: 3, name: "Skidmore College", logo: "https://www.parchment.com/c/images/college/1168-crest-250-200-fcf5b93c6cf0c00672c656460be4aa4e.png"}
];
const userSchoolInfo = [
	{schoolId: 0, major: "Computer Science", minor: "Spanish", grad: "2011", degree: "Bachelor of Science"},
];
const degreeTypes = ["Bachelor of Arts", "Bachelor of Fine Arts", "Bachelor of Architecture", "Bachelor of Science"];

class EducationInfo extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			schools: [
				{id: 0, name: "Southern New Hampshire University", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU6xTuPALE2X4rM7vryx06LT0fl0IDJcjo853v0uUJEtCKgMNr4GdfnA"}
			],
			searchText: '',
			degreeSearchText: '',
			availableSchoolsForSearch: [],
			snackbar: {
				open: false,
				text: ''
			},
		};
	}

	renderSchools(){
		return this.state.schools.map((school, index) => {
			let schoolInfo = userSchoolInfo.filter(function(schoolDetails, index){
				return schoolDetails.schoolId == school.id;
			});
			return(
				<Tab 
					icon={<Avatar 
						src={school.logo} 
						size={30}
						className="avatar-override"
					/>}
					style={{color:"#555", whiteSpace: "normal"}}
					label={school.name}
				>
					<TextField
						floatingLabelText="Major"
						value={(schoolInfo[0]) ? schoolInfo[0].major : null}
						className="input-group-textfield"
						fullWidth={true}
					/>
					<TextField
						floatingLabelText="Minor"
						value={(schoolInfo[0]) ? schoolInfo[0].minor : null}
						className="input-group-textfield"
						fullWidth={true}
					/>
					<TextField
						floatingLabelText="Graduation Year"
						value={(schoolInfo[0]) ? schoolInfo[0].grad : null}
						className="input-group-textfield"
						fullWidth={true}
					/>
					<AutoComplete 
						hintText="Degree Earned"
						filter={AutoComplete.caseInsensitiveFilter}
						dataSource={degreeTypes}
						searchText={(schoolInfo[0]) ? schoolInfo[0].degree : this.state.degreeSearchText}
						onUpdateInput={this.handleDegreeUpdateInput.bind(this)}
						fullWidth={true}
					/>
				</Tab>
			);
		});
	}

	handleDegreeUpdateInput(text){
		this.setState({degreeSearchText: text});
	}

	handleUpdateInput(text){
		this.setState({searchText: text});
	}

	componentWillMount(){
		this.setState({availableSchoolsForSearch: availableSchoolsForSearch});
	}

	addSchool(request, index){
		const result = availableSchools.filter(function(school, key) {
			return school.name == request;
		});
		if(result.length == 0){
			this.setState({snackbar: {open: true, text: request+" is not yet part of the CampusTap community. An e-mail has been sent to our accounts team. Thank you."}});
			return
		}
		const remainingSchools = this.state.availableSchoolsForSearch.filter(function(school, key) {
			return school != result[0].name;
		});
		this.setState({availableSchoolsForSearch: remainingSchools});
		let schools = this.state.schools;
		schools.push(result[0]);
		this.setState({schools: schools, searchText: ''});
		let dialog = document.getElementsByClassName('js-authenticate-wrapper')[0];
		dialog.style.maxWidth = (parseInt(dialog.style.maxWidth.replace('rem', '')) + 12)+'rem';
	}

	handleContinue(){
		this.props.changeView('currentView','career');
		document.getElementsByClassName('js-authenticate-wrapper')[0].style.maxWidth = '25rem';
	}

	render(){
		return(
			<div>
				<h2 className="authenticate-header">Education</h2>
				<Tabs
					tabItemContainerStyle={{background: "transparent"}}
				>
					{this.renderSchools()}
					<Tab
						icon={<AddSchoolIcon className="authenticate-add-another-school"/>}
						style={{color:"#555"}}
						label="Add Another School"
					>
						<AutoComplete 
							hintText="Search For School"
							filter={AutoComplete.caseInsensitiveFilter}
							dataSource={this.state.availableSchoolsForSearch}
							searchText={this.state.searchText}
							onUpdateInput={this.handleUpdateInput.bind(this)}
							onNewRequest={this.addSchool.bind(this)}
							fullWidth={true}
						/>
					</Tab>
				</Tabs>
				<FlatButton
					label="Continue"
					primary={true}
					style={{float: "right", margin: "1rem 0 0 1rem"}}
					onTouchTap={() => this.handleContinue()}
				/>
				<Snackbar
					open={this.state.snackbar.open}
					message={this.state.snackbar.text}
					autoHideDuration={20000}
					className="authenticate-school-not-found"
				/>
			</div>
		);
	}
}

export default EducationInfo;
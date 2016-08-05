import React, {Component} from 'react';
import areIntlLocalesSupported from 'intl-locales-supported';

import {Tabs, Tab} from 'material-ui/Tabs';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';

import AddCareerIcon from 'material-ui/svg-icons/content/add';

let availableSchoolsForSearch = ["Boston College", "Northeastern University", "Skidmore College"];
const availableSchools = [
	{id: 1, name: "Boston College", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/BostonCollegeEagles.svg/1128px-BostonCollegeEagles.svg.png"},
	{id: 2, name: "Northeastern University", logo: "http://www.kaplanconstructs.com/wp-content/uploads/2015/11/northeasternuniversity_logoseal.png"},
	{id: 3, name: "Skidmore College", logo: "https://www.parchment.com/c/images/college/1168-crest-250-200-fcf5b93c6cf0c00672c656460be4aa4e.png"}
];
const userSchoolInfo = [
	{schoolId: 0, major: "Marketing", minor: "Spanish", grad: "2011", degree: "Bachelor of Science"},
];
const degreeTypes = ["Bachelor of Arts", "Bachelor of Fine Arts", "Bachelor of Architecture", "Bachelor of Science"];
let DateTimeFormat;
if (areIntlLocalesSupported(['fr'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  const IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/fr');
}
class CareerInfo extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			careerCount: 1,
			careers: [],
			searchText: '',
		};
	}

	renderCareers(){
		let tabs = [];
		for(let i = 0; i < this.state.careerCount; i++){
			tabs.push(
				<Tab 
					key={i}
					style={{color:"#555"}}
					label={"Career #"+(i + 1)}
					icon={<AddCareerIcon/>}
				>
					<TextField
						floatingLabelText="Title"
						className="input-group-textfield"
						fullWidth={true}
					/>
					<TextField
						floatingLabelText="Company"
						className="input-group-textfield"
						fullWidth={true}
					/>
					<DatePicker hintText="Start Date" fullWidth={true} formatDate={new DateTimeFormat('en-US', {
											day: 'numeric',
											month: 'long',
											year: 'numeric',
										}).format}/>
					<DatePicker hintText="End Date" fullWidth={true} formatDate={new DateTimeFormat('en-US', {
											day: 'numeric',
											month: 'long',
											year: 'numeric',
										}).format}/>
				</Tab>
			);
		}
		return tabs;
	}

	handleDegreeUpdateInput(text){
		this.setState({degreeSearchText: text});
	}

	handleUpdateInput(text){
		this.setState({searchText: text});
	}

	addCareer(){
		this.setState({careerCount: this.state.careerCount + 1});
		let dialog = document.getElementsByClassName('js-authenticate-wrapper')[0];
		dialog.style.maxWidth = (parseInt(dialog.style.maxWidth.replace('rem', '')) + 12)+'rem';
	}

	render(){
		return(
			<div>
				<h2 className="authenticate-header">Career</h2>
				<Tabs
					tabItemContainerStyle={{background: "transparent"}}
				>
					{this.renderCareers()}
					<Tab
						icon={<AddCareerIcon className="authenticate-add-another-school"/>}
						style={{color:"#555"}}
						label="Add Another Career"
						onClick={this.addCareer.bind(this)}
					>
					</Tab>
				</Tabs>
				<FlatButton
					label="Continue"
					primary={true}
					style={{float: "right", margin: "1rem 0 0 1rem"}}
					onTouchTap={() => this.props.changeView('currentView','industries')}
				/>
			</div>
		);
	}
}

export default CareerInfo;
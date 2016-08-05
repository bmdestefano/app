import React, {Component} from 'react';
import {Link} from 'react-router';
import School from '../models/School';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import FullBackground from './FullBackground';
import Login from './Login';
import Register from './Register';
import PersonalInfo from './PersonalInfo';
import EducationInfo from './EducationInfo';
import CareerInfo from './CareerInfo';
import IndustriesInfo from './IndustriesInfo';
import RoleInfo from './RoleInfo';
import GivingBack from './GivingBack';
import Quiz from './Quiz';
import Results from './Results';
import Interests from './Interests';
import AuthenticateLargeHeader from './AuthenticateLargeHeader';

require('../styles/import.scss');

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: School.primaryColor,
		accent1Color: School.secondaryColor,
		pickerHeaderColor: School.primaryColor,
	},
	datePicker: {
		selectColor: School.primaryColor,
	}
});

class Authentication extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			currentView: 'register',
			hasError: false,
			errorText: {createPassword: '', confirmPassword: '', firstName: '', lastName: ''},
			createPassword:'',
			confirmPassword:'',
			genderValue: 'male',
			ethnicityValue: 'american-indian'
		};
	}

	handleTextFieldBlur(event, type){
		let errorText = this.state.errorText;
		if(event.target.value == '')
			errorText[type] = "This field is required";
		else
			errorText[type] = "";
		if(type == 'confirmPassword' 
			&& event.target.value != this.state.createPassword 
			&& errorText.confirmPassword == '')
				errorText.confirmPassword = "Passwords do not match";
		this.setState({[type] : event.target.value});
		this.setState({errorText: errorText});
		if(errorText[type] != '')
			this.setState({hasError: true});
		else if(errorText[type] == ''
				&& this.state.hasError == true)
			this.setState({hasError: false});
	}

	updateState(type, value){
		this.setState({[type] : value});
	}

	renderLoginScreen(){
		return (<Login changeView={this.updateState.bind(this)} />);
	}

	renderRequestAccountScreen(){
		return(
			<div>
				<AuthenticateLargeHeader 
					logoUrl={School.logo}
					schoolName={School.name}
				/>
				<TextField
					floatingLabelText="E-mail"
					fullWidth={true}
				/>
				<div style={{width: "100%", height: "3rem"}}>
					<FlatButton
						label="Request"
						primary={true}
						style={{float: "right", margin: "1rem 0 1rem 1rem"}}
					/>
				</div>
			</div>
		);
	}

	renderRegisterScreen(){
		return (<Register 
			changeView={this.updateState.bind(this)} 
			onBlur={this.handleTextFieldBlur.bind(this)}
			isRegisterButtonDisabled={this.isRegisterButtonDisabled.bind(this)}
			createPasswordError={this.state.errorText['createPassword']}
			confirmPasswordError={this.state.errorText['confirmPassword']} />);
	}

	renderPersonalInfoScreen(){
		return (<PersonalInfo 
			changeView={this.updateState.bind(this)} 
			firstNameError={this.state.errorText['firstName']}
			lastNameError={this.state.errorText['lastName']}
			genderValue={this.state.genderValue}
			ethnicityValue={this.state.ethnicityValue}
			onGenderChange={this.handleDropdownChange.bind(this, 'genderValue')}
			onEthnicityChange={this.handleDropdownChange.bind(this, 'ethnicityValue')}
		/>);
	}

	renderEducationScreen(){
		return(
			<EducationInfo 
				changeView={this.updateState.bind(this)} 
			/>
		);
	}

	renderCareerScreen(){
		return(
			<CareerInfo 
				changeView={this.updateState.bind(this)} 
			/>
		);
	}

	renderIndustriesScreen(){
		return(
			<IndustriesInfo
				changeView={this.updateState.bind(this)} 
			/>
		);
	}

	renderRoleScreen(){
		return(
			<RoleInfo
				changeView={this.updateState.bind(this)} 
			/>
		);
	}

	renderGivingBackScreen(){
		return(
			<GivingBack
				changeView={this.updateState.bind(this)}
			/>	
		);
	}

	renderQuizScreen(){
		return(
			<Quiz
				changeView={this.updateState.bind(this)}
			/>
		);
	}

	renderResultsScreen(){
		return(
			<Results
				changeView={this.updateState.bind(this)}
			/>	
		);
	}

	renderInterestsScreen(){
		return(
			<Interests
				changeView={this.updateState.bind(this)}
			/>	
		);
	}

	handleDropdownChange(type, event, index, value){
		this.setState({[type]: value});
	}

	isRegisterButtonDisabled(){
		return (this.state.hasError
				|| this.state.createPassword == ''
				|| this.state.confirmPassword == '') ? true : false;
	}

	renderView(){
		let viewName = this.state.currentView.charAt(0).toUpperCase() + this.state.currentView.slice(1);
		return this["render"+viewName+"Screen"]();
	}

	render(){
		return(
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<FullBackground
						image={School.authenticateSplashBackgroundUrl}
					/>
					<Dialog 
						className="authenticate-wrapper" 
						open={true} 
						contentClassName="js-authenticate-wrapper" 
						contentStyle={{maxWidth: "25rem", marginBottom: "4rem"}}>
						{this.renderView()}
					</Dialog>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Authentication;
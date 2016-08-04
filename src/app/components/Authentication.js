import React, {Component} from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import Login from './Login';
import Register from './Register';
import PersonalInfo from './PersonalInfo';
import EducationInfo from './EducationInfo';
import CareerInfo from './CareerInfo';
import IndustriesInfo from './IndustriesInfo';
import RoleInfo from './RoleInfo';
import GivingBack from './GivingBack';
import AuthenticateLargeHeader from './AuthenticateLargeHeader';

require('../styles/import.scss');

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: "#00A9E0",
		accent1Color: "#EA7600",
		pickerHeaderColor: "#00A9E0",
	},
	datePicker: {
		selectColor: "#00A9E0",
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
			userSrc: '',
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
					logoUrl="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/University_of_Kansas_Jayhawk_logo.svg/1156px-University_of_Kansas_Jayhawk_logo.svg.png"
					schoolName="University of Kansas"
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
			onAvatarUploadSuccess={this.handleUploadSuccess}
			userAvatarSrc={this.state.userSrc}
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

	handleDropdownChange(type, event, index, value){
		this.setState({[type]: value});
	}

	handleUploadSuccess(fpfiles){
		this.setState({userSrc: fpfiles.url});
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
				<div style={{height: "100vh", background: "url('https://s3.amazonaws.com/campustapstaging/FrxPdjEiTE22uFBTYC3h_6406608eb1c847c08ec8b3e81915dc3a.png') no-repeat center/cover"}}>
				<Link to="event" style={{position: "fixed", right: "0"}}>Event</Link>
				<Dialog className="authenticate-wrapper" open={true} contentClassName="js-authenticate-wrapper" contentStyle={{maxWidth: "25rem", marginBottom: "4rem"}}>
					{this.renderView()}
				</Dialog>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Authentication;
import React, {Component} from 'react';
import School from '../models/School';
import User from '../models/User';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import PasswordIcon from 'material-ui/svg-icons/action/lock';

import AuthenticateLargeHeader from './AuthenticateLargeHeader';

let GoogleIcon = require('babel!svg-react!../img/google-dark.svg?name=GoogleIcon');
let FacebookIcon = require('babel!svg-react!../img/facebook-dark.svg?name=FacebookIcon');
let TwitterIcon = require('babel!svg-react!../img/twitter-dark.svg?name=TwitterIcon');
let LinkedinIcon = require('babel!svg-react!../img/linkedin-dark.svg?name=LinkedinIcon');

class Register extends Component{
	render(){
		return(
			<div>
				<AuthenticateLargeHeader 
					logoUrl={School.logo}
					schoolName={School.name}
				/>
				<div className="input-group">
					<EmailIcon className="input-group-icon"/>
					<TextField
						floatingLabelText="School E-mail"
						value={User.email}
						className="input-group-textfield"
					/>
				</div>
				<div className="input-group">
					<PasswordIcon className="input-group-icon"/>
					<TextField
						floatingLabelText="Create Password"
						className="input-group-textfield"
						type="password"
						errorText={this.props.createPasswordError}
						onBlur={(event) => this.props.onBlur(event, 'createPassword')}
					/>
				</div>
				<div className="input-group">
					<PasswordIcon className="input-group-icon"/>
					<TextField
						floatingLabelText="Confirm Password"
						className="input-group-textfield"
						type="password"
						errorText={this.props.confirmPasswordError}
						onBlur={(event) => this.props.onBlur(event, 'confirmPassword')}
					/>
				</div>
				<div style={{height: "3rem"}}>
					<FlatButton
						label="Create"
						primary={true}
						className="lower-right-btn"
						disabled={this.props.isRegisterButtonDisabled()}
						onTouchTap={() => this.props.changeView('currentView', 'personalInfo')}
					/>
				</div>
				<hr />
				<p className="text-center" style={{color: "#777"}}>Register With Social</p>
				<div className="authenticate-icons-wrapper">
					<GoogleIcon className="authenticate-icon"/>
					<FacebookIcon className="authenticate-icon"/>
					<TwitterIcon className="authenticate-icon"/>
					<LinkedinIcon className="authenticate-icon"/>
				</div>
			</div>
		);
	}
}

export default Register;
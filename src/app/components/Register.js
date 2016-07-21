import React, {Component} from 'react';
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
					logoUrl="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/University_of_Kansas_Jayhawk_logo.svg/1156px-University_of_Kansas_Jayhawk_logo.svg.png"
					schoolName="University of Kansas"
				/>
				<div className="input-group">
					<EmailIcon className="input-group-icon"/>
					<TextField
						floatingLabelText="School E-mail"
						value="brendan@thecampustap.com"
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
				<div style={{width: "100%", height: "3rem"}}>
					<FlatButton
						label="Create"
						primary={true}
						style={{float: "right", margin: "1rem 0 0 1rem"}}
						disabled={this.props.isRegisterButtonDisabled()}
						onTouchTap={() => this.props.changeView('currentView', 'personalInfo')}
					/>
				</div>
				<hr />
				<p style={{color: "#777", textAlign: "center"}}>Register With Social</p>
				<div style={{display: "block", margin: "1rem auto 0", width: "12rem"}}>
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
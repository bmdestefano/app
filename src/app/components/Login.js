import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import AuthenticateLargeHeader from './AuthenticateLargeHeader';
class Login extends Component{
	render(){
		return(
			<div>
				<AuthenticateLargeHeader 
					logoUrl="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/University_of_Kansas_Jayhawk_logo.svg/1156px-University_of_Kansas_Jayhawk_logo.svg.png"
					schoolName="University of Kansas"
				/>
				<TextField
					floatingLabelText="Login"
					fullWidth={true}
				/>
				<TextField
					floatingLabelText="Password"
					fullWidth={true}
					type="password"
				/>
				<FlatButton
					label="Login"
					primary={true}
					style={{float: "right", margin: "1rem 0 1rem 1rem"}}
				/>
				<div className="authenticate-lower-addon">
					<a className="request-account" onClick={() => this.props.changeView('currentView','requestAccount')}>Request Account |</a>
					<a className="forgot-password">Forgot Password</a>
				</div>
			</div>
		);
	}
}

export default Login;
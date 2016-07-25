import React, {Component} from 'react';
import ReactFilepicker from 'react-filepicker';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import AuthenticateLargeHeader from './AuthenticateLargeHeader';

import AddImageIcon from 'material-ui/svg-icons/content/add';

const options = {
	buttonText: '',
	buttonClass: 'filepicker',
	mimetype: 'image/*',
	webcamDim: [1280, 720],
	webcam: {
		videoRes: '1280x720'
	},
};
class PersonalInfo extends Component{
	render(){
		return(
			<div>
				<AuthenticateLargeHeader 
					logoUrl="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/University_of_Kansas_Jayhawk_logo.svg/1156px-University_of_Kansas_Jayhawk_logo.svg.png"
					schoolName="University of Kansas"
				/>
				<div style={{position: "relative"}}>
					<ReactFilepicker apikey={"A4dOeHXUnQHS0qVUJYRRez"} options={options} onSuccess={this.props.onAvatarUploadSuccess} />
					<Avatar 
						size={96} 
						style={(this.props.userAvatarSrc == '') 
							? {margin: "1rem auto", display: "block", border: "1px solid #555"} 
							: {margin: "1rem auto", display: "block", border: "1px solid #555", background: "transparent"}} 
						src={this.props.userAvatarSrc} 
						icon={(this.props.userAvatarSrc != '') 
							? null 
							: <AddImageIcon />} />
					{(this.props.userAvatarSrc == '') && <p style={{textAlign: "center"}}>Add Image To Profile</p>}
				</div>
				<TextField
					floatingLabelText="First Name"
					className="input-group-textfield"
					fullWidth={true}
					errorText={this.props.firstNameError}
				/>
				<TextField
					floatingLabelText="Last Name"
					className="input-group-textfield"
					fullWidth={true}
					errorText={this.props.lastNameError}
				/>
				<TextField
					floatingLabelText="About"
					className="input-group-textfield"
					fullWidth={true}
				/>
				<TextField
					floatingLabelText="Current City"
					className="input-group-textfield"
					fullWidth={true}
				/>
				<TextField
					floatingLabelText="Hometown"
					className="input-group-textfield"
					fullWidth={true}
				/>
				<SelectField value={this.props.genderValue} onChange={this.props.onGenderChange} fullWidth={true} style={{marginTop: "1rem"}}>
					<MenuItem value="male" primaryText="Male" />
					<MenuItem value="female" primaryText="Female" />
					<MenuItem value="trans" primaryText="Transgender" />
				</SelectField>
				<SelectField value={this.props.ethnicityValue} onChange={this.props.onEthnicityChange} fullWidth={true} style={{marginTop: "1rem"}}>
					<MenuItem value="american-indian" primaryText="American Indian or Alaska Native" />
					<MenuItem value="asian" primaryText="Asian" />
					<MenuItem value="black" primaryText="Black or African American" />
					<MenuItem value="pacific" primaryText="Native Hawaiian or Other Pacific Islander" />
					<MenuItem value="white" primaryText="White" />
				</SelectField>
				<FlatButton
					label="Continue"
					primary={true}
					style={{float: "right", margin: "1rem 0 0 1rem"}}
					onTouchTap={() => this.props.changeView('currentView','education')}
				/>
			</div>
		);
	}
}

export default PersonalInfo;
import React, {Component} from 'react';
import ReactFilepicker from 'react-filepicker';
import School from '../models/School';
import User from '../models/User';
import FilePickerConfig from '../constants/FilePickerConfig';

import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import AuthenticateLargeHeader from './AuthenticateLargeHeader';

import AddImageIcon from 'material-ui/svg-icons/content/add';

class PersonalInfo extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {userSrc: ''}
	}

	handleUploadSuccess(fpfiles){
		this.setState({userSrc: fpfiles.url});
	}

	componentDidMount(){
		let dialog = document.getElementsByClassName('js-authenticate-wrapper')[0];
		dialog.style.maxWidth = (parseInt(dialog.style.maxWidth.replace('rem', '')) + 18)+'rem';
	}

	render(){
		return(
			<div>
				<AuthenticateLargeHeader 
					logoUrl={School.logo}
					schoolName={School.name}
				/>
				<div className="relative">
					<ReactFilepicker 
						apikey={FilePickerConfig.key} 
						options={FilePickerConfig.options} 
						onSuccess={this.handleUploadSuccess.bind(this)} 
					/>
					<Avatar 
						size={96} 
						className="authenticate-avatar"
						style={(this.state.userSrc == '') 
							? "" 
							: {background: "transparent"}} 
						src={this.state.userSrc} 
						icon={(this.state.userSrc != '') 
							? null 
							: <AddImageIcon />} />
					{(this.props.userAvatarSrc == '') && <p className="text-center">Add Image To Profile</p>}
				</div>
				<TextField
					floatingLabelText="First Name"
					className="input-group-textfield half-left"
					errorText={this.props.firstNameError}
				/>
				<TextField
					floatingLabelText="Last Name"
					className="input-group-textfield half-right"
					errorText={this.props.lastNameError}
				/>
				<TextField
					floatingLabelText="About"
					className="input-group-textfield"
					fullWidth={true}
				/>
				<TextField
					floatingLabelText="Current City"
					className="input-group-textfield half-left"
				/>
				<TextField
					floatingLabelText="State"
					className="input-group-textfield half-right"
				/>
				<SelectField 
					value={this.props.genderValue} 
					className="half-left" 
					onChange={this.props.onGenderChange} 
					style={{marginTop: "1rem"}}>
					<MenuItem value="male" primaryText="Male" />
					<MenuItem value="female" primaryText="Female" />
					<MenuItem value="trans" primaryText="Transgender" />
				</SelectField>
				<SelectField 
					value={this.props.ethnicityValue} 
					className="half-right" 
					onChange={this.props.onEthnicityChange} 
					style={{marginTop: "1rem"}}>
					<MenuItem value="american-indian" primaryText="American Indian or Alaska Native" />
					<MenuItem value="asian" primaryText="Asian" />
					<MenuItem value="black" primaryText="Black or African American" />
					<MenuItem value="pacific" primaryText="Native Hawaiian or Other Pacific Islander" />
					<MenuItem value="white" primaryText="White" />
				</SelectField>
				<FlatButton
					label="Continue"
					primary={true}
					className="lower-right-btn"
					onTouchTap={() => this.props.changeView('currentView','education')}
				/>
			</div>
		);
	}
}

export default PersonalInfo;
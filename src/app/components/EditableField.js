import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

class EditableField extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			active: false,
			text: this.props.text,
			saving: false,
			saveDisabled: false,
		};
	}

	handleActiveClick(){
		this.setState({active: true});
	}

	handleSaveClick(value = false){
		let text = (value) ? value : document.getElementById('editable-field').value;
		this.setState({saving: true});
		window.setTimeout(() => {this.setState({saving: false, active: false, text: text})}, 3000);
	}

	renderButton(){
		if(!this.state.saving)
			return(
				<RaisedButton 
					label="Save"
					style={{float: "right", marginTop: "0.75rem"}}
					onTouchTap={() => this.handleSaveClick()}
					disabled={this.state.saveDisabled}
				/>
			);
		else
			return(
				<RefreshIndicator 
					left={1000}
					top={10}
					status="loading"
					style={{top: "0.5rem", left: "inherit", right: "2rem", transform: "none"}}
				/>
			);
		
	}

	checkForEmptyValue(){
		if(this.refs.textField.getValue() == '')
			this.setState({saveDisabled: true});
		else if(this.state.saveDisabled == true)
			this.setState({saveDisabled: false});
	}

	handleOnBlur(e){
		if(this.refs.textField.getValue() == this.props.text)
			this.setState({
				active: false,
				text: this.props.text,
				saving: false,
				saveDisabled: false
			});
		else
			this.handleSaveClick(this.refs.textField.getValue());
	}

	render(){
		return(
			<div style={this.props.style}>
				{(!this.state.active && 
					<div>
						<h3 className={this.props.cssClass+" inline-block"}>{this.state.text}</h3>
						<RaisedButton 
							className="editable-btn"
							icon={<EditIcon />}
							onTouchTap={() => this.handleActiveClick()}
						/>
					</div>
				)}
				{(this.state.active &&
					<div style={{position: "relative"}}>
						<TextField 
							id="editable-field"
							className={this.props.cssClass+" editable-field reset-height"}
							underlineFocusStyle={{borderColor: "#000"}}
							underlineStyle={{borderColor: "#000"}}
							defaultValue={this.state.text}
							ref="textField"
							onChange={() => this.checkForEmptyValue()}
							style={{width: "85%"}}
							onBlur={(e) => this.handleOnBlur(e)}
						/>
						{this.renderButton()}
					</div>	
				)}
			</div>
		);
	}
}

export default EditableField;
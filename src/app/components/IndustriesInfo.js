import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';

import CTAutoComplete from './CTAutoComplete';

const industries = ["Accounting", "Marketing", "Biology"];

class IndustriesInfo extends Component{
	constructor(props, context){
		super(props, context);
	}

	render(){
		return(
			<div>
				<h2 className="authenticate-header">Industries</h2>
				<p className="text-center">Add industries of interest below</p>
				<CTAutoComplete 
					data={industries}
					floatingText="Enter Industries"
					hintText="i.e. Accounting"
				/>
				<FlatButton
					label="Continue"
					primary={true}
					className="lower-right-btn"
					onTouchTap={() => this.props.changeView('currentView','role')}
				/>
			</div>
		);
	}
}

export default IndustriesInfo;
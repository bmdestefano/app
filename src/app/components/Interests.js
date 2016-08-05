import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import CTAutoComplete from './CTAutoComplete';
import { Link } from 'react-router'

let tags = [
	"Sports",
	"Music",
	"Art",
	"Writing",
	"Reading",
	"Running",
	"Biking",
];
class Interests extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {};
	}

	render(){
		return(
			<div>
				<h2 className="authenticate-header">Interests</h2>
				<p className="text-center">Last step! Select some interests of yours below</p>
				<CTAutoComplete 
					data={tags}
					floatingText="Enter Interests"
					hintText="i.e. Reading"
				/>
				<Link to="/settings"><FlatButton
					label="Continue"
					primary={true}
					className="lower-right-btn"
				/></Link>
			</div>
		);
	}
}

export default Interests;
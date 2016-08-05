import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';

class RoleInfo extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			chosenRole: null,
		};
	}

	getParent(el, selector){
		while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el,selector)));
    	return el;
	}

	handleRoleChange(e){
		let parent = this.getParent(e.target, '.js-role-choice');
		let choices = document.getElementsByClassName('js-role-choice');
		for(let i = 0; i < choices.length; i++){
			choices[i].className = "js-role-choice";
			if(choices[i] == parent){
				this.setState({chosenRole: parent.getAttribute('data-index')});
				choices[i].className += " role-selected";
			}
		}
	}

	render(){
		return(
			<div>
				<h2 className="authenticate-header">Your Role</h2>
				<p className="text-center">Select how you would like to participate in CampusTap</p>
				<List>
					<ListItem 
						primaryText="Mentor" 
						className="js-role-choice" 
						data-index="0" 
						onTouchTap={(e) => this.handleRoleChange(e)}/>
					<ListItem 
						primaryText="Mentee" 
						className="js-role-choice" 
						data-index="1" 
						onTouchTap={(e) => this.handleRoleChange(e)} />
				</List>
				<FlatButton
					label="Continue"
					primary={true}
					disabled={(this.state.chosenRole != null) ? false : true}
					className="lower-right-btn"
					onTouchTap={() => this.props.changeView('currentView','givingBack')}
				/>
			</div>
		);
	}
}

export default RoleInfo;
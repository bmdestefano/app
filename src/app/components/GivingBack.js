import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';

let textByRole = {
	'mentor' : {
		'intro' : 'Select one or more ways you might like to help a student/alumni from your college',
		'fields' : ['Posting Jobs & Internships', 'Giving Informational Interviews', 'Participating in Events', 'Resume Review', 'General Career Advice'],
	},
	'mentee' : {
		'intro' : 'Select one or more ways you might like help from a mentor',
		'fields' : ['Posting Jobs & Internships', 'Giving Informational Interviews', 'Participating in Events', 'Resume Review', 'General Career Advice'],
	}
};

class GivingBack extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			role: 'mentor',
			selectedOptions: []
		};
	}

	getParent(el, selector){
		while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el,selector)));
    	return el;
	}

	handleChange(e){
		let parent = this.getParent(e.target, '.js-choice');
		let choices = document.getElementsByClassName('js-choice');
		let selected = this.state.selectedOptions;
		for(let i = 0; i < choices.length; i++){
			if(choices[i] != parent
				&& choices[i].className.indexOf('js-select-none') == -1){
				document.getElementsByClassName('js-select-none')[0] = 'js-choice';
				continue;
			}
			if(choices[i] == parent
				&& choices[i].className.indexOf('selected') == -1){
				selected.push(parent.getAttribute('data-index')[0]);
				choices[i].className += " selected";
			}else{
				let search = this.state.selectedOptions.filter(e => e != parent.getAttribute('data-index'));
				if(search)
					selected.push(search);
				choices[i].className = "js-choice";
			}
		}
		this.setState({selectedOptions: selected});
	}

	renderOptions(){
		return textByRole[this.state.role].fields.map((field, index) => {
			return(
				<ListItem primaryText={field} className="js-choice" data-index={index} onTouchTap={(e) => this.handleChange(e)}/>
			);
		});
	}

	render(){
		return(
			<div>
				<h2 className="authenticate-header">Giving Back</h2>
				<p style={{textAlign: "center"}}>{textByRole[this.state.role].intro}</p>
				<List>
					{this.renderOptions()}
					<ListItem primaryText="Select All" style={{float: "left", width: "50%"}} className="js-choice" onTouchTap={(e) => this.handleChange(e)}/>
					<ListItem primaryText="Select None" style={{float: "left", width: "50%"}} className="js-choice js-select-none selected" onTouchTap={(e) => this.handleChange(e)}/>
				</List>
				<FlatButton
					label="Continue"
					primary={true}
					style={{float: "right", margin: "1rem 0 0 1rem"}}
					onTouchTap={() => this.props.changeView('currentView','quiz')}
				/>
			</div>
		);
	}
}

export default GivingBack;
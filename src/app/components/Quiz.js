import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import FlatButton from 'material-ui/FlatButton';

let UncheckedLarge = require('babel!svg-react!../img/unchecked-large.svg?name=UncheckedLarge');
let CheckedLarge = require('babel!svg-react!../img/checked-large.svg?name=CheckedLarge');
let UncheckedMedium = require('babel!svg-react!../img/unchecked-medium.svg?name=UncheckedMedium');
let CheckedMedium = require('babel!svg-react!../img/checked-medium.svg?name=CheckedMedium');
let UncheckedSmall = require('babel!svg-react!../img/unchecked-small.svg?name=UncheckedSmall');
let CheckedSmall = require('babel!svg-react!../img/checked-small.svg?name=CheckedSmall');

let questions = [
	"Am the life of the party",
	"Feel little concern for others",
	"Am always prepared",
	"Get stressed out easily",
	"Have a rich vocabulary",
	"Don’t talk a lot",
	"Am interested in people",
	"Leave my belongings around",
	"Am relaxed most of the time",
	"Have difficulty understanding abstract ideas"
];
class Quiz extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {};
	}

	componentDidMount(){
		let dialog = document.getElementsByClassName('js-authenticate-wrapper')[0];
		dialog.style.maxWidth = (parseInt(dialog.style.maxWidth.replace('rem', '')) + 12)+'rem';
	}

	renderQuizQuestions(){
		return questions.map((question, index) => {
			return(
				<ListItem className="hover-transparent" style={{marginTop: (index == 0) ? "0" : "2rem"}}>
					<h2 className="quiz-question">{question}</h2>
					<div>
						<span className="quiz-left">Inaccurate</span>
						<RadioButtonGroup className="quiz-options">
							<RadioButton 
								value={1} 
								uncheckedIcon={<UncheckedLarge />} 
								checkedIcon={<CheckedLarge className="quiz-circle"/>} 
								className="quiz-radio quiz-large-radio"/>
							<RadioButton 
								value={2} 
								uncheckedIcon={<UncheckedMedium />} 
								checkedIcon={<CheckedMedium className="quiz-circle"/>} 
								className="quiz-radio quiz-medium-radio"/>
							<RadioButton 
								value={3} 
								uncheckedIcon={<UncheckedSmall />} 
								checkedIcon={<CheckedSmall className="quiz-circle"/>}
								className="quiz-radio quiz-small-radio"/>
							<RadioButton 
								value={4} 
								uncheckedIcon={<UncheckedMedium />} 
								checkedIcon={<CheckedMedium className="quiz-circle"/>} 
								className="quiz-radio quiz-medium-radio"/>
							<RadioButton 
								value={5} 
								uncheckedIcon={<UncheckedLarge />} 
								checkedIcon={<CheckedLarge className="quiz-circle"/>} 
								className="quiz-radio quiz-large-radio"/>
						</RadioButtonGroup>
						<span className="quiz-right">Accurate</span>
					</div>
				</ListItem>
			);
		});
	}

	render(){
		return(
			<div>
				<h2 className="authenticate-header">Personality Quiz</h2>
				<p className="text-center" >Now to find out more about you as a person.</p>
				<p className="text-center" style={{marginTop: "1rem"}}>For each statement below, select the dot that corresponds to how well you feel it represents you. The more honest you are, the better your matches will be.</p>
				<List>
					{this.renderQuizQuestions()}
				</List>
				<FlatButton
					label="Continue"
					primary={true}
					className="lower-right-btn"
					onTouchTap={() => this.props.changeView('currentView','results')}
				/>
			</div>
		);
	}
}

export default Quiz;
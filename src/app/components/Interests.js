import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
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

	renderQuizQuestions(){
		return questions.map((question, index) => {
			return(
				<ListItem className="hover-transparent" style={{marginTop: (index == 0) ? "0" : "2rem"}}>
					<h2 className="quiz-question">{question}</h2>
					<div>
						<span className="quiz-left">Inaccurate</span>
						<RadioButtonGroup className="quiz-options">
							<RadioButton value={1} className="quiz-radio quiz-large-radio"/>
							<RadioButton value={2} className="quiz-radio quiz-medium-radio"/>
							<RadioButton value={3} className="quiz-radio quiz-small-radio"/>
							<RadioButton value={4} className="quiz-radio quiz-medium-radio"/>
							<RadioButton value={5} className="quiz-radio quiz-large-radio"/>
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
				<h2 className="authenticate-header">Interests</h2>
				<p style={{textAlign: "center"}}>Last step! Select some interests of yours below</p>
				<CTAutoComplete 
					data={tags}
					floatingText="Enter Interests"
					hintText="i.e. Reading"
				/>
				<Link to="/settings"><FlatButton
					label="Continue"
					primary={true}
					style={{float: "right", margin: "1rem 0 0 1rem"}}
				/></Link>
			</div>
		);
	}
}

export default Interests;
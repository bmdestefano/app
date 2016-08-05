import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';

let results = [
	{title: "Conscientiousness", score: "0.75"},
	{title: "Agreeableness", score: "0.25"},
	{title: "Emotional Stability", score: "1"},
	{title: "Openness To New Experiences", score: "0.35"},
	{title: "Extroversion", score: "0"},
];
class Results extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {};
	}

	renderResults(){
		return results.map((result, index) => {
			return (
				<ListItem className="hover-transparent" style={{marginTop: (index == 0) ? "0" : "3.75rem"}}>
					<h2 className="quiz-question">{result.title}</h2>
					<div>
						<span className="quiz-results-left">Low</span>
						<Slider className="quiz-results" defaultValue={result.score} step={0}/>
						<span className="quiz-results-right">High</span>
					</div>
				</ListItem>
			);
		});
	}

	render(){
		return(
			<div>
				<h2 className="authenticate-header">Results</h2>
				<p className="text-center" >See? Who doesn’t love a good personality quiz?</p>
				<p className="text-center" style={{marginTop: "1rem"}}>Here’s how you rank on five key personality traits that have been vetted by the professionals.</p>
				<List>
					{this.renderResults()}
				</List>
				<FlatButton
					label="Continue"
					primary={true}
					className="lower-right-btn"
					onTouchTap={() => this.props.changeView('currentView','interests')}
				/>
			</div>
		);
	}
}

export default Results;
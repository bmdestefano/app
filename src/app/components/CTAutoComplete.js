import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';

const searchOverride = '';
class CTAutoComplete extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			activeTags: [],
			searchText: '',
		}
	}

	addTag(request, index){
		const tags = this.state.activeTags;
		if(tags.indexOf(request) != -1)
			return true;
		tags.push({key: index, label : request});

		this.setState({activeTags: tags});
	}

	handleRequestDelete(key){
		const tags = this.state.activeTags;
		const chipKey = key;

		const result = tags.filter(function(tag, key) {
		    return tag.key !== chipKey;
		});
		this.setState({activeTags: result});
	}

	renderTagList(){
		const tags = this.state.activeTags;
		if(typeof tags[0] === 'undefined')
			return true;
		return tags.map((tag, index) => {
			return(
				<Chip
					key={tag.key}
					onRequestDelete={() => this.handleRequestDelete(tag.key)}
					backgroundColor={"#EA7600"}
					labelColor={"#FFF"}
					style={{textTransform: 'uppercase', float: 'left', marginRight: "10px", marginBottom: "10px"}}
					className="tag-chip"
				>{tag.label}</Chip>
			);
		})
	}

	handleUpdateInput(text){
		this.setState({searchText: text});
	}

	componentDidMount(){
		if(this.props.existingData)
			this.setState({activeTags: this.props.existingData});
	}

	render(){
		return(
			<div style={{overflow: "overlay"}}>
				<AutoComplete 
					id="autoCompleteInput"
					fullWidth={true} 
					floatingLabelText={this.props.floatingText} 
					filter={AutoComplete.fuzzyFilter} 
					dataSource={this.props.data} 
					maxSearchResults={5}
					searchText={this.state.searchText}
					onNewRequest={this.addTag.bind(this)}
					onUpdateInput={this.handleUpdateInput.bind(this)}
					hintText={this.props.hintText} />
				<div style={{width: "100%", height: "33px"}}>
					{this.state.activeTags.length > 0 && (
						<p style={{color: "#555", display: "inline-block", "marginRight": "10px", marginTop: "10px", "float": "left"}}>Selected:</p>
					)}
					{this.renderTagList()}
				</div>
			</div>
		);
	}
}

export default CTAutoComplete;
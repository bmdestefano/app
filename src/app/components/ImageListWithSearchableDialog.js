import React, {Component} from 'react';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import ExitIcon from 'material-ui/svg-icons/content/clear';

class ImageListWithSearchableDialog extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			items: [],
			dialog: false,
		};
	}

	renderItems(count = false){
		let items = (count) ? this.props.items : this.state.items;
		return items.map((item, index) => {
			if(count && index >= count)
				return;
			return(
				<ListItem
					key={item.id}
					primaryText={(this.props.primaryTextField) ? item[this.props.primaryTextField] : null}
					secondaryText={(this.props.secondaryTextField) 
						? item[this.props.secondaryTextField] 
						: null}
					leftAvatar={(this.props.avatarSrcField) ? <Avatar src={item[this.props.avatarSrcField]} style={{backgroundColor: "#EEE"}}/> : null}
					className={this.props.itemClass} />
			);
		});
	}

	handleDialogOpen(){
		this.setState({dialog: true});
	}

	handleDialogClose(){
		this.setState({dialog: false});
	}
	
	search(event){
		let searchValue = event.target.value;
		let items = (length >= searchValue.length) ? this.getInitialItemsState() : this.state.items.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);});
		length = searchValue.length;
		const result = items.filter(function(item, key) {
		    return item.name.toLowerCase().indexOf(searchValue) != -1;
		});
		this.setState({items: result});
	}

	componentDidMount(){
		this.setState({items: this.props.items});
	}

	getInitialItemsState(){
		return this.props.items;
	}

	render(){
		return(
			<div>
				<List
					style={{overflow: "overlay"}}
				>
					{this.renderItems(this.props.showCount)}
				</List>
				{(this.props.showCount < Object.keys(this.props.items).length 
					&& <a onClick={this.handleDialogOpen.bind(this)} style={{margin: "1rem auto", width: "100%", display: "block", textAlign: "center", color: "#00A9E0"}}>See All {this.props.listType}</a>)}
				<Dialog
					title={<h3>All {this.props.listType}<ExitIcon style={{float: "right"}} onTouchTap={() => this.handleDialogClose()}/></h3>}
					modal={false}
					open={this.state.dialog}
					onRequestClose={this.handleDialogClose.bind(this)}>
					<TextField
						hintText={"Search for "+this.props.listType.charAt(0).toLowerCase()+this.props.listType.slice(1)+" by name"}
						fullWidth={true}
						onChange={(e) => this.search(e)}
						inputStyle={{color: "#555"}}
					/>
					<List className="item-dialog-wrapper">
						{this.renderItems()}
					</List>
				</Dialog>
			</div>
		);
	}
}

export default ImageListWithSearchableDialog;
import React, {Component} from 'react';
import User from '../../models/User';
import School from '../../models/School';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
import Card from 'material-ui/Card';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';

import ProfileRenderer from '../ProfileRenderer';
import ImageListWithSearchableDialog from '../ImageListWithSearchableDialog';

import IntroIcon from 'material-ui/svg-icons/social/person';
import MapIcon from 'material-ui/svg-icons/maps/place';
import InspirationIcon from 'material-ui/svg-icons/image/blur-on';
import TriumphIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import ExpertiseIcon from 'material-ui/svg-icons/maps/my-location';
import EducationIcon from 'material-ui/svg-icons/social/school';
import ExperienceIcon from 'material-ui/svg-icons/action/work';
import ConnectionIcon from 'material-ui/svg-icons/action/timeline';
import TagsIcon from 'material-ui/svg-icons/maps/local-offer';
import PostIcon from 'material-ui/svg-icons/action/description';
import CoverLetterIcon from 'material-ui/svg-icons/action/flip-to-front';
import ProjectIcon from 'material-ui/svg-icons/image/brush';
import OtherIcon from 'material-ui/svg-icons/action/extension';
import DownloadIcon from 'material-ui/svg-icons/file/file-download';
import StarIcon from 'material-ui/svg-icons/toggle/star';
import GroupIcon from 'material-ui/svg-icons/social/group';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import CommentIcon from 'material-ui/svg-icons/communication/comment';
import ExitIcon from 'material-ui/svg-icons/content/clear';

let FacebookIcon = require('babel!svg-react!../../img/facebook-icon.svg?name=FacebookIcon');
let TwitterIcon = require('babel!svg-react!../../img/twitter-icon.svg?name=TwitterIcon');
let LinkedinIcon = require('babel!svg-react!../../img/linkedin-icon.svg?name=LinkedinIcon');
let user = User;

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: School.primaryColor,
		accent1Color: School.secondaryColor,
		pickerHeaderColor: School.primaryColor,
	},
	datePicker: {
		selectColor: School.primaryColor,
	}
});

class Profile extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			portfolioDialog : {
				open : false,
				currentDocument: null
			},
			connectDialog : false,
			connectStatus : "Connect",
			messageDialog : false,
		};
	}

	getHeroImageMarkup(){
		return(
			<div className="hero-image-wrapper">
				<img src={user.backgroundUrl} />
				<div className="overlay"></div>
			</div>
		);
	}

	getAvatartImageMarkup(){
		return(
			<div className="profile-img">
				<img src={user.avatarUrl} />
			</div>
		);
	}

	getUserDetails(){
		return(
			<div className="profile-user-details">
				<h2 className="profile-name">{user.name}</h2>
				<h3 className="profile-school">{user.schools[0].name} - <span className="hidden-mobile">Class of </span>{user.schools[0].year}</h3>
				<h3 className="profile-school">{user.currentStatus}</h3>
				<h3 className="profile-school">{user.city+', '+user.state}</h3>
				<div className="profile-social-wrapper">
					{user.authenticatedNetworks.map((network, index) => {
						return(
							<a>{network.image}</a>
						);
					})}
				</div>
			</div>
		);
	}

	renderAreasOfExpertise(){
		return user.areasOfExpertise.map((type, index) => {
			return(
				<div key={index} className={"profile-details-subheader expertise-"+(index%3)} style={{marginBottom: "1rem", fontSize: "1.5rem", border: "0", textAlign: "center"}}>
					<StarIcon style={{fill: muiTheme.palette.primary1Color, verticalAlign: "text-top"}}/>{type}
				</div>
			);
		});
	}

	renderSchools(){
		return user.schools.map((school, index) => {
			return(
				<div className="profile-school-wrapper" key={index}>
					<h2 className="profile-details-subheader">{school.name} <span>{(school.degree) ? school.degree+',' : ''} {school.year}</span></h2>
					{(school.major && 
						<p><span>Major: </span>{school.major}</p>
					)}
					{(school.minor && 
						<p><span>Minor: </span>{school.minor}</p>
					)}
				</div>
			);
		});
	}

	renderExperience(){
		return user.experience.map((job, index) => {
			return(
				<div className="profile-school-wrapper" key={index}>
					<h2 className="profile-details-subheader">{job.company} <span>{job.startYear} - {(job.endYear) ? job.endYear : 'Current'}</span></h2>
					<p><span>Position Held: </span>{job.position}</p>
				</div>
			);
		});
	}

	renderTags(){
		return user.tags.map((tag, index) => {
			return(
				<Chip
					key={index}
					backgroundColor={(tag.match) ? "#EA7600" : "#CCC"}
					labelColor={"#FFF"}
					className="tag-chip tag"
				>{tag.name}</Chip>
			);
		});
	}

	renderPost(post, index){
		return(
			<Card className="timeline-card">
				<h2 className="profile-details-header"><PostIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Post<span>{post.posted} ago</span></h2>
				<div className="profile-timeline-content-wrapper">
					{(post.content.startsWith("https://www"))
						? <iframe width="560" height="315" src={post.content} frameborder="0" allowfullscreen></iframe>
						: <p>{post.content}</p>
					}
					<p style={{marginTop: "1rem"}}><FavoriteIcon style={{fill: "#555", verticalAlign: "middle"}}/> {post.favoriteCount} <CommentIcon style={{fill: "#555", verticalAlign: "middle"}}/> {post.commentCount}</p>
					<List style={{margin: "1rem 0", borderTop: "1px solid #EEE"}}>
						{(post.comments && this.renderPostComments(post.comments))}
						<ListItem className="add-comment">
							<TextField hintText="Post A Comment" style={{width: "85%"}}/>
							<RaisedButton label="Comment" primary={true} style={{float: "right", zIndex: "1"}}/>
						</ListItem>	
					</List>
				</div>
			</Card>
		);
	}

	renderPostComments(comments){
		return comments.map((comment, index) => {
			let text = <p>{comment.name} &bull; <span style={{fontSize: "0.75rem", verticalAlign: "top", fontWeight: "400"}}>{comment.posted}</span></p>;
			return(
				<ListItem 
					key={index}
					className="profile-comment"
					leftAvatar={<Avatar src={comment.avatarUrl} />}
					primaryText={text}
					secondaryText={comment.content}
					secondaryTextLines={2}
				/>
			);
		});
	}

	renderComment(comment, index){
		return(
			<Card className="timeline-card">
				<h2 className="profile-details-header"><CommentIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Comment<span>{comment.posted} ago</span></h2>
				<div className="profile-timeline-content-wrapper">
					<p>{comment.content}</p>
				</div>
			</Card>
		);
	}

	renderTimeline(){
		return user.timeline.map((content, index) => {
			return this['render'+content.type.charAt(0).toUpperCase()+content.type.slice(1)](content, index);
		});
	}

	renderConnectStatusButton(){
		if(this.state.connectStatus == "Connect")
			return(<RaisedButton label="Connect" primary={true} onTouchTap={() => this.handleConnectDialogOpen()}/>);
		else
			return(<RaisedButton label="Pending Connection" primary={true} disabled={true} onTouchTap={() => this.handleConnectDialogOpen()}/>);
	}

	getPortfolioIcon(type){
		if(type == 'resume')
			return(
				<IconButton><PostIcon color="white" /></IconButton>
			);
		else if(type == 'cover-letter')
			return(
				<IconButton><CoverLetterIcon color="white" /></IconButton>
			);
		else if(type == 'project')
			return(
				<IconButton><ProjectIcon color="white" /></IconButton>
			);
		else
			return(
				<IconButton><OtherIcon color="white" /></IconButton>
			);
		
		
	}

	renderPortfolio(){
		return user.documents.map((doc, index) => {
			return(
				<GridTile 
					key={index}
					title={<p>{doc.title}<span style={{float: "right", marginRight: "1rem", fontSize: "0.75rem", fontWeight: "400"}}>{doc.uploadedDate}</span></p>}
					titlePosition="top"
					titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
					actionIcon={this.getPortfolioIcon(doc.type)}
					actionPosition="left"
					cols={(index%3 == 2 || window.outerWidth < 768) ? 2 : 1}
					rows={1}
					className="portfolio-item"
					onTouchTap={() => this.toggleDialog(index)}
				>
					<div style={{background: "url('"+doc.image+"') center/cover", height: "100%"}}></div>
				</GridTile>
			);
		});
	}

	toggleDialog(index){
		let dialog = this.state.portfolioDialog;
		dialog.open = !dialog.open;
		let currentDocument = user.documents.filter((doc, i) => {return index == i});
		dialog.currentDocument = currentDocument[0];
		this.setState({portfolioDialog : dialog});
	}

	handleConnectDialogClose(){
		this.setState({connectDialog: false});
	}
	
	handleConnectDialogOpen(){
		this.setState({connectDialog: true});
	}

	handleSendConnection(){
		this.setState({
			connectDialog: false,
			connectStatus: "Pending",
		});
	}

	handleSendMessage(){
		this.setState({messageDialog: false});
	}

	handleMessageDialogClose(){
		this.setState({messageDialog: false});
	}

	handleMessageDialogOpen(){
		this.setState({messageDialog: true});
	}

	getTabs(){
		return(
			<div>
				<Tabs 
					inkBarStyle={{backgroundColor: muiTheme.palette.primary1Color}}
					tabItemContainerStyle={{backgroundColor: "#FFF"}}
					contentContainerClassName="profile-tab-content-wrapper"
					className="tab-split-wrapper">
					<Tab className="page-header" label="About" style={{background: "#FFF", color: "#555"}}>
						<Card style={{padding: "1rem"}}>
							<div className="profile-detail-wrapper">
								<h2 className="profile-details-header"><IntroIcon className="profile-header-icon"/>Intro<span><MapIcon />{user.city}, {user.state}</span></h2>
								<p>{user.description}</p>
							</div>
							<div className="profile-detail-wrapper">
								<h2 className="profile-details-header"><InspirationIcon className="profile-header-icon"/>Inspiration</h2>
								<p><span>Best Advice I Ever Received</span></p>
								<p>{user.bestAdvice}</p>
								<p style={{marginTop: "1rem"}}><span>Personal Triumphs</span></p>
								{user.triumphs.map((triumph, index) => {
									return(
										<ListItem 
											primaryText={triumph}
											leftIcon={<TriumphIcon style={{fill: muiTheme.palette.primary1Color}}/>}
											className="hover-transparent"
										/>
									);
								})}
							</div>
							<div className="profile-detail-wrapper">
								<h2 className="profile-details-header"><ExpertiseIcon className="profile-header-icon"/>Areas of Expertise</h2>
								{this.renderAreasOfExpertise()}
							</div>
							<div id="schools" className="profile-detail-wrapper">
								<h2 className="profile-details-header"><EducationIcon className="profile-header-icon"/>Education</h2>
								{this.renderSchools()}
							</div>
							<div id="jobs" className="profile-detail-wrapper">
								<h2 className="profile-details-header"><ExperienceIcon className="profile-header-icon"/>Experience</h2>
								{this.renderExperience()}
							</div>
							<div className="profile-detail-wrapper">
								<h2 className="profile-details-header">
									<ConnectionIcon className="profile-header-icon"/>Connections
									{(Object.keys(user.connections).length > 0 
										&& <p 
											style={{display: "inline-block", marginLeft: "0.5rem", fontSize: "inherit"}}>&bull; {Object.keys(user.connections).length}
											</p>
									)}
								</h2>
								<ImageListWithSearchableDialog 
									showCount={9}
									items={user.connections}
									primaryTextField={"name"}
									secondaryTextField={"major"}
									avatarSrcField={"image"}
									listType="Connections"
									itemClass="one-third"
									openText="See All Connections"
								/>
							</div>
							<div className="profile-detail-wrapper">
								<h2 className="profile-details-header">
									<GroupIcon className="profile-header-icon"/>Groups
									{(Object.keys(user.groups).length > 0 
										&& <p 
											style={{display: "inline-block", marginLeft: "0.5rem", fontSize: "inherit"}}>&bull; {Object.keys(user.groups).length}
											</p>
									)}
								</h2>
								<ImageListWithSearchableDialog 
									showCount={6}
									items={user.groups}
									primaryTextField={"name"}
									secondaryTextField={"members"}
									secondaryTextFieldLabel={"Members: "}
									avatarSrcField={"image"}
									listType="Groups"
									itemClass="one-third"
									openText="See All Groups"
								/>
							</div>
							<div className="profile-detail-wrapper relative">
								<h2 className="profile-details-header">
									<TagsIcon className="profile-header-icon"/>Tags
								</h2>
								<div style={{position: "absolute", top: "0.25rem", left: "6.5rem"}}>
									<div style={{background: "#EA7600", borderRadius: "50%", height: "1rem", width: "1rem", float: "left", marginRight: "0.5rem"}}></div>
									<p style={{float: "left", fontSize: ".75rem", color: "#AAA", marginRight: "0.5rem"}}>Matched</p>
									<div style={{background: "#CCC", borderRadius: "50%", height: "1rem", width: "1rem", float: "left", marginRight: "0.5rem"}}></div>
									<p style={{float: "left", fontSize: ".75rem", color: "#AAA", marginRight: "0.5rem"}}>Unmatched</p>
								</div>
								{this.renderTags()}
							</div>
							
						</Card>
					</Tab>
					<Tab className="page-header" label="E-Portfolio" style={{background: "#FFF", color: "#555"}}>
						<div className="profile-detail-wrapper" style={{overflow: "initial"}}>
							<Card style={{padding: "1rem"}}>
								<h2 className="profile-details-header"><PostIcon className="profile-header-icon"/>Documents</h2>
								<div style={{position: "absolute", top: "1rem", left: "12.5rem"}}>
									<PostIcon style={{float: "left", fill: "#555", width: "1rem", height: "1rem", marginTop: "0.125rem"}}/>
									<p style={{float: "left", fontSize: ".75rem", color: "#AAA", marginRight: "0.5rem"}}>Resume</p>
									<CoverLetterIcon style={{float: "left", fill: "#555", width: "1rem", height: "1rem", marginTop: "0.125rem"}}/>
									<p style={{float: "left", fontSize: ".75rem", color: "#AAA", marginRight: "0.5rem"}}>Cover Letter</p>
									<ProjectIcon style={{float: "left", fill: "#555", width: "1rem", height: "1rem", marginTop: "0.125rem"}}/>
									<p style={{float: "left", fontSize: ".75rem", color: "#AAA", marginRight: "0.5rem"}}>Project</p>
									<OtherIcon style={{float: "left", fill: "#555", width: "1rem", height: "1rem", marginTop: "0.125rem"}}/>
									<p style={{float: "left", fontSize: ".75rem", color: "#AAA", marginRight: "0.5rem"}}>Other</p>
								</div>
								<GridList
									cols={2}
									cellHeight={250}
									padding={35}
								>
									{this.renderPortfolio()}
								</GridList>
								<Dialog
									modal={false}
									open={this.state.portfolioDialog.open}
									onRequestClose={this.toggleDialog.bind(this)}
									title={(this.state.portfolioDialog.currentDocument) ? this.state.portfolioDialog.currentDocument.title : null}
								>
									<p style={{position: "absolute", top: "2.15rem", right: "1.5rem", fontSize: "0.75rem"}}>{(this.state.portfolioDialog.currentDocument) ? ['Uploaded: '+this.state.portfolioDialog.currentDocument.uploadedDate] : null}</p>
									<div style={{background: "url('"+((this.state.portfolioDialog.currentDocument) ? this.state.portfolioDialog.currentDocument.image : null)+"') center center/cover", marginBottom: "1rem", height: "12.5rem"}} ></div>
									<p>{(this.state.portfolioDialog.currentDocument) ? this.state.portfolioDialog.currentDocument.description : null}</p>
									<RaisedButton 
										label="Download"
										icon={<DownloadIcon />}
										primary={true}
										className="lower-right-btn"
									/>
								</Dialog>
							</Card>
						</div>
					</Tab>
				</Tabs>
				<div className="profile-action-btn-wrapper">
					{this.renderConnectStatusButton()}
					<Dialog
						title={
							<div>
								<ListItem
									primaryText={<div>Connect with {user.name} <ExitIcon style={{float: "right"}} onTouchTap={() => this.handleConnectDialogClose()}/></div>}
									secondaryText={"Class of "+user.schools[0].year+" | "+user.currentStatus}
									leftAvatar={<Avatar src={user.avatarUrl}/>}
									className="hover-transparent"/>
							</div>
						}
						modal={false}
						open={this.state.connectDialog}
						onRequestClose={this.handleConnectDialogClose.bind(this)}>
						<p>Choose which areas you are interested in:</p>
						<List>
							{user.areasOfExpertise.map((type, index) => {
								return(
									<ListItem
										key={index}
										primaryText={type}
										leftCheckbox={<Checkbox />}
										innerDivStyle={{width: "33%", float: "left"}} />
								);
							})}
						</List>
						<TextField
							hintText="Type your message here"
							multiLine={true}
							fullWidth={true}
							rows={1}
							rowsMax={6}
						/>
						<div style={{float: "right"}}>
							<RaisedButton label="Send" primary={true} style={{marginTop: "1rem", marginRight: "1rem"}} onTouchTap={() => this.handleSendConnection()}/>
							<RaisedButton label="Cancel" style={{marginTop: "1rem", marginRight: "1rem", color: muiTheme.palette.primary1Color}} onTouchTap={() => this.handleConnectDialogClose()}/>
						</div>
					</Dialog>
					<RaisedButton label="Message" style={{color: muiTheme.palette.primary1Color}} onTouchTap={() => this.handleMessageDialogOpen()}/>
					<Dialog
						title={
							<div>
								<ListItem
									primaryText={<div>Contact {user.name} <ExitIcon style={{float: "right"}} onTouchTap={() => this.handleMessageDialogClose()}/></div>}
									secondaryText={"Class of "+user.schools[0].year+" | "+user.currentStatus}
									leftAvatar={<Avatar src={user.avatarUrl}/>}
									className="hover-transparent"/>
							</div>
						}
						modal={false}
						open={this.state.messageDialog}
						onRequestClose={this.handleMessageDialogClose.bind(this)}>
						<TextField
							hintText="Subject"
							multiLine={true}
							fullWidth={true}
							rows={1}
							rowsMax={2}
						/>
						<TextField
							hintText="Type your message here"
							multiLine={true}
							fullWidth={true}
							rows={1}
							rowsMax={6}
						/>
						<div style={{float: "right"}}>
							<RaisedButton label="Send" primary={true} style={{marginTop: "1rem", marginRight: "1rem"}} onTouchTap={() => this.handleSendMessage()}/>
							<RaisedButton label="Cancel" style={{marginTop: "1rem", marginRight: "1rem", color: muiTheme.palette.primary1Color}} onTouchTap={() => this.handleMessageDialogClose()}/>
						</div>
					</Dialog>
				</div>
			</div>
		);
	}

	render(){
		return(
			<ProfileRenderer 
				user={user}
				heroImageMarkup={this.getHeroImageMarkup()}
				avatarImageMarkup={this.getAvatartImageMarkup()}
				userDetails={this.getUserDetails()}
				tabs={this.getTabs()}
			/>
		);
	}
}

export default Profile;
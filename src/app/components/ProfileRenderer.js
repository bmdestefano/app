import React, {Component, PropTypes} from 'react';
import Card from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import {GridList, GridTile} from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
import Checkbox from 'material-ui/Checkbox';

import ImageListWithSearchableDialog from './ImageListWithSearchableDialog';

import IntroIcon from 'material-ui/svg-icons/social/person';
import EducationIcon from 'material-ui/svg-icons/social/school';
import ExperienceIcon from 'material-ui/svg-icons/action/work';
import MapIcon from 'material-ui/svg-icons/maps/place';
import TagsIcon from 'material-ui/svg-icons/maps/local-offer';
import StarIcon from 'material-ui/svg-icons/toggle/star';
import PostIcon from 'material-ui/svg-icons/action/description';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import CommentIcon from 'material-ui/svg-icons/communication/comment';
import DownloadIcon from 'material-ui/svg-icons/file/file-download';
import ExpertiseIcon from 'material-ui/svg-icons/maps/my-location';
import OpenIcon from 'material-ui/svg-icons/action/open-in-new';
import ConnectionIcon from 'material-ui/svg-icons/action/timeline';
import GroupIcon from 'material-ui/svg-icons/social/group';
import ExitIcon from 'material-ui/svg-icons/content/clear';
import InspirationIcon from 'material-ui/svg-icons/image/blur-on';
import TriumphIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import CoverLetterIcon from 'material-ui/svg-icons/action/flip-to-front';
import ProjectIcon from 'material-ui/svg-icons/image/brush';
import OtherIcon from 'material-ui/svg-icons/action/extension';



class ProfileRenderer extends Component{
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

	renderTags(){
		return this.props.user.tags.map((tag, index) => {
			return(
				<Chip
					key={index}
					backgroundColor={(tag.match) ? "#EA7600" : "#FFDC66"}
					labelColor={"#FFF"}
					style={{textTransform: 'uppercase', float: 'left', marginRight: "10px", marginTop: "10px"}}
					className="tag-chip"
				>{tag.name}</Chip>
			);
		});
	}

	renderSchools(){
		return this.props.user.schools.map((school, index) => {
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
		return this.props.user.experience.map((job, index) => {
			return(
				<div className="profile-school-wrapper" key={index}>
					<h2 className="profile-details-subheader">{job.company} <span>{job.startYear} - {(job.endYear) ? job.endYear : 'Current'}</span></h2>
					<p><span>Position Held: </span>{job.position}</p>
				</div>
			);
		});
	}

	renderAreasOfExpertise(){
		return this.props.user.areasOfExpertise.map((type, index) => {
			return(
				<div key={index} className={"profile-details-subheader expertise-"+(index%3)} style={{marginBottom: "1rem", fontSize: "1.5rem", border: "0", textAlign: "center"}}>
					<StarIcon style={{fill: "#00A9E0", verticalAlign: "text-top"}}/>{type}
				</div>
			);
		});
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
		return this.props.user.timeline.map((content, index) => {
			return this['render'+content.type.charAt(0).toUpperCase()+content.type.slice(1)](content, index);
		});
	}

	toggleDialog(index){
		let dialog = this.state.portfolioDialog;
		dialog.open = !dialog.open;
		let currentDocument = this.props.user.documents.filter((doc, i) => {return index == i});
		dialog.currentDocument = currentDocument[0];
		this.setState({portfolioDialog : dialog});
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
		return this.props.user.documents.map((doc, index) => {
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

	renderConnectStatusButton(){
		if(this.state.connectStatus == "Connect")
			return(<RaisedButton label="Connect" primary={true} onTouchTap={() => this.handleConnectDialogOpen()}/>);
		else
			return(<RaisedButton label="Pending Connection" primary={true} disabled={true} onTouchTap={() => this.handleConnectDialogOpen()}/>);
	}

	render(){
		let image = (this.state.portfolioDialog.currentDocument) ? this.state.portfolioDialog.currentDocument.image : null;
		return(
			<div>
				<div className="hero-wrapper">
					{this.props.heroImageMarkup}
					<div className="hero-details-outer-wrapper">
						<div className="hero-details-inner-wrapper" style={{paddingBottom: "4rem"}}>
							<div className="keep-center">
								{this.props.avatarImageMarkup}
								{this.props.userDetails}
							</div>
						</div>
					</div>
				</div>
				<div className="keep-center profile-lower-wrapper">
					<div className="content no-overlay">
						<Tabs 
							inkBarStyle={{backgroundColor: "#00A9E0"}}
							tabItemContainerStyle={{backgroundColor: "#FFF"}}
							contentContainerClassName="profile-tab-content-wrapper"
							className="tab-split-wrapper">
							<Tab className="page-header" label="About" style={{background: "#FFF", color: "#555"}}>
								<Card style={{padding: "1rem", borderRadius: "0px"}}>
									<div className="profile-detail-wrapper">
										<h2 className="profile-details-header"><IntroIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Intro<span><MapIcon />{this.props.user.city}, {this.props.user.state}</span></h2>
										<p>{this.props.user.description}</p>
									</div>
									<div className="profile-detail-wrapper">
										<h2 className="profile-details-header"><InspirationIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Inspiration</h2>
										<p><span>Best Advice I Ever Received</span></p>
										<p>{this.props.user.bestAdvice}</p>
										<p style={{marginTop: "1rem"}}><span>Personal Triumphs</span></p>
										{this.props.user.triumphs.map((triumph, index) => {
											return(
												<ListItem 
													primaryText={triumph}
													leftIcon={<TriumphIcon style={{fill: "#00A9E0"}}/>}
													className="hover-transparent"
												/>
											);
										})}
									</div>
									<div className="profile-detail-wrapper">
										<h2 className="profile-details-header"><ExpertiseIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Areas of Expertise</h2>
										{this.renderAreasOfExpertise()}
									</div>
									<div id="schools" className="profile-detail-wrapper">
										<h2 className="profile-details-header"><EducationIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Education</h2>
										{this.renderSchools()}
									</div>
									<div id="jobs" className="profile-detail-wrapper">
										<h2 className="profile-details-header"><ExperienceIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Experience</h2>
										{this.renderExperience()}
									</div>
									<div className="profile-detail-wrapper">
										<h2 className="profile-details-header">
											<ConnectionIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Connections
											{(Object.keys(this.props.user.connections).length > 0 
												&& <p 
													style={{display: "inline-block", marginLeft: "0.5rem", fontSize: "inherit"}}>&bull; {Object.keys(this.props.user.connections).length}
													</p>
											)}
										</h2>
										<ImageListWithSearchableDialog 
											showCount={9}
											items={this.props.user.connections}
											primaryTextField={"name"}
											secondaryTextField={"major"}
											avatarSrcField={"image"}
											listType="Connections"
											itemClass="one-third"
										/>
									</div>
									<div className="profile-detail-wrapper">
										<h2 className="profile-details-header">
											<GroupIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Groups
											{(Object.keys(this.props.user.groups).length > 0 
												&& <p 
													style={{display: "inline-block", marginLeft: "0.5rem", fontSize: "inherit"}}>&bull; {Object.keys(this.props.user.groups).length}
													</p>
											)}
										</h2>
										<ImageListWithSearchableDialog 
											showCount={6}
											items={this.props.user.groups}
											primaryTextField={"name"}
											secondaryTextField={"members"}
											secondaryTextFieldLabel={"Members: "}
											avatarSrcField={"image"}
											listType="Groups"
											itemClass="one-third"
										/>
									</div>
									<div className="profile-detail-wrapper" style={{position: "relative"}}>
										<h2 className="profile-details-header">
											<TagsIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Tags
										</h2>
										<div style={{position: "absolute", top: "0.25rem", left: "6.5rem"}}>
											<div style={{background: "#EA7600", borderRadius: "50%", height: "1rem", width: "1rem", float: "left", marginRight: "0.5rem"}}></div>
											<p style={{float: "left", fontSize: ".75rem", color: "#AAA", marginRight: "0.5rem"}}>Matched</p>
											<div style={{background: "#FFDC66", borderRadius: "50%", height: "1rem", width: "1rem", float: "left", marginRight: "0.5rem"}}></div>
											<p style={{float: "left", fontSize: ".75rem", color: "#AAA", marginRight: "0.5rem"}}>Unmatched</p>
										</div>
										{this.renderTags()}
									</div>
									
								</Card>
							</Tab>
							<Tab className="page-header" label="Timeline" style={{background: "#FFF", color: "#555"}}>
								<div className="profile-detail-wrapper timeline">
									{this.renderTimeline()}
								</div>
							</Tab>
							<Tab className="page-header" label="E-Portfolio" style={{background: "#FFF", color: "#555"}}>
								<div className="profile-detail-wrapper" style={{overflow: "initial"}}>
									<Card style={{padding: "1rem"}}>
										<h2 className="profile-details-header"><PostIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Documents</h2>
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
											<div style={{background: "url('"+image+"') center center/cover", marginBottom: "1rem", height: "12.5rem"}} ></div>
											<p>{(this.state.portfolioDialog.currentDocument) ? this.state.portfolioDialog.currentDocument.description : null}</p>
											<RaisedButton 
												label="Download"
												icon={<DownloadIcon />}
												primary={true}
												style={{float: "right", marginTop: "1rem"}}
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
											primaryText={<div>Connect with {this.props.user.name} <ExitIcon style={{float: "right"}} onTouchTap={() => this.handleConnectDialogClose()}/></div>}
											secondaryText={"Class of "+this.props.user.schools[0].year+" | "+this.props.user.currentStatus}
											leftAvatar={<Avatar src={this.props.user.avatarUrl}/>}
											className="hover-transparent"/>
									</div>
								}
								modal={false}
								open={this.state.connectDialog}
								onRequestClose={this.handleConnectDialogClose.bind(this)}>
								<p>Choose which areas you are interested in:</p>
								<List>
									{this.props.user.areasOfExpertise.map((type, index) => {
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
									<RaisedButton label="Cancel" style={{marginTop: "1rem", marginRight: "1rem", color: "#00A9E0"}} onTouchTap={() => this.handleConnectDialogClose()}/>
								</div>
							</Dialog>
							<RaisedButton label="Message" style={{color: "#00A9E0"}} onTouchTap={() => this.handleMessageDialogOpen()}/>
							<Dialog
								title={
									<div>
										<ListItem
											primaryText={<div>Contact {this.props.user.name} <ExitIcon style={{float: "right"}} onTouchTap={() => this.handleMessageDialogClose()}/></div>}
											secondaryText={"Class of "+this.props.user.schools[0].year+" | "+this.props.user.currentStatus}
											leftAvatar={<Avatar src={this.props.user.avatarUrl}/>}
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
									<RaisedButton label="Cancel" style={{marginTop: "1rem", marginRight: "1rem", color: "#00A9E0"}} onTouchTap={() => this.handleMessageDialogClose()}/>
								</div>
							</Dialog>
						</div>
					</div>
				</div>			
			</div>
		);
	}
}

ProfileRenderer.propTypes = {
	user: PropTypes.object.isRequired,
}

export default ProfileRenderer;
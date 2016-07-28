import React, {Component} from 'react';
import Card from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import {GridList, GridTile} from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';

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
let FacebookIcon = require('babel!svg-react!../../img/facebook-icon.svg?name=FacebookIcon');
let TwitterIcon = require('babel!svg-react!../../img/twitter-icon.svg?name=TwitterIcon');
let LinkedinIcon = require('babel!svg-react!../../img/linkedin-icon.svg?name=LinkedinIcon');

let user = {
	avatarUrl: "https://www.filepicker.io/api/file/hDvuYs7eSNKDdWDwy4Mr",
	backgroundUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F21363263%2F170576045191%2F1%2Foriginal.jpg?w=1000&rect=0%2C578%2C5616%2C2808&s=1b98247e23d2a311eaac71c474d394b1",
	name: "Remy Carpinito",
	schools: [
		{name: "Suffolk University", year: "2014", major: "Entrepreneurship", minor: "Spanish", degree: "Bachelor of Arts"},
		{name: "Emerson College", year: "2015", major: "Finance", degree: "Graduate Degree"}
	],
	experience: [
		{company: "CampusTap", startYear: "2014", position: "CEO"},
		{company: "Fidelity", startYear: "2013", endYear: "2014", position: "Systems Analyst Intern"},
	],
	city: "Reading",
	state: "MA",
	description: "I am a Senior at CampusTap University and I am candidate for a Bachelor of Science degree in Economics-Finance with a minor in Computer Information Systems. I have an interest in finance, wealth management and asset management. I am involved with the CampusTap Investment Group and the club hockey team. I am looking for advice on applying to full time investment banking positions post graduation.",
	tags: ["boston", "history", "wellness", "dance", "technology", "running", "biotechnology", "business", "data", "research", "jazz", "engineering", "health"],
	areasOfExpertise: ["Resume Reviews", "Informational Interviews", "General Career Advice"],
	currentStatus: "CEO of CampusTap",
	timeline: [
		{
			type: "post", 
			posted: "1d", 
			content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
			favoriteCount: 13,
			commentCount: 3,
			comments: [
				{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
				{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
				{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
			],
		},
		{
			type: "comment",
			posted: "3d",
			content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you."
		},
		{
			type: "post", 
			posted: "5d", 
			content: "https://www.youtube.com/embed/zNdkrtfZP8I",
			favoriteCount: 3,
			commentCount: 0,
			comments: [
				{name: "Jackie Judy", avatarUrl: "https://randomuser.me/api/portraits/med/women/53.jpg", posted: "5d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."},
				{name: "John Judy", avatarUrl: "https://randomuser.me/api/portraits/med/men/53.jpg", posted: "3d", content: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017."},
				{name: "Jake Doe", avatarUrl: "https://randomuser.me/api/portraits/med/men/43.jpg", posted: "1d", content: "Great post."},
			],
		},
	],
	documents: [
		{
			title: "Remy Carpinito's Resume",
			uploadedDate: "6/15/16",
			image: "http://thumb1.shutterstock.com/display_pic_with_logo/2842531/272513510/stock-photo-closeup-of-resume-272513510.jpg",
			description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you."
		},
		{
			title: "Remy Carpinito's Cover Letter",
			uploadedDate: "6/15/16",
			image: "http://thumb7.shutterstock.com/display_pic_with_logo/307150/283436795/stock-vector-modern-cover-letter-design-with-blue-white-colors-283436795.jpg",
			description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you."
		},
		{
			title: "Twitter Redesign Project",
			uploadedDate: "5/12/16",
			image: "http://thumb101.shutterstock.com/display_pic_with_logo/691372/154181867/stock-photo-brussels-september-twitter-is-going-public-on-september-in-brussels-154181867.jpg",
			description: "This is a project I made for CS 560 as my final project."
		},
		{
			title: "Connect4 Python Project",
			uploadedDate: "5/21/16",
			image: "http://thumb7.shutterstock.com/display_pic_with_logo/1369678/410081401/stock-photo-smart-city-and-wireless-communication-network-iot-internet-of-things-ict-information-410081401.jpg",
			description: "This is a project I made for CS 587. It is a working Connect4 game made in Python."
		},
		{
			title: "Digital Marketing Project",
			uploadedDate: "4/11/16",
			image: "http://thumb7.shutterstock.com/display_pic_with_logo/682636/407256469/stock-vector-big-infographics-in-flat-style-vector-illustrations-about-digital-projects-management-clients-407256469.jpg",
			description: "This is my final digital marketing project for MKT 610."
		}
	],
	connections : [
		{id: 0, name: "John Doe", major: "Accounting", grad: "2010", image: "https://randomuser.me/api/portraits/med/men/83.jpg"},
		{id: 1, name: "Sam Smith", major: "Marketing", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/53.jpg"},
		{id: 2, name: "Jim James", major: "Finance", grad: "2011", image: "https://randomuser.me/api/portraits/med/men/23.jpg"},
		{id: 3, name: "Sam Torrez", major: "International Relations", grad: "2012", image: "https://randomuser.me/api/portraits/med/women/53.jpg"},
		{id: 4, name: "James Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/men/93.jpg"},
		{id: 5, name: "Bob Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/men/13.jpg"},
		{id: 6, name: "Geno Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/men/33.jpg"},
		{id: 7, name: "Jane Jones", major: "Entrepreneurship", grad: "2015", image: "https://randomuser.me/api/portraits/med/women/93.jpg"},
		{id: 8, name: "Bobby Barker", major: "Marketing", grad: "2017", image: "https://randomuser.me/api/portraits/med/women/13.jpg"},
		{id: 9, name: "Jennie Smith", major: "Business Administration", grad: "2018", image: "https://randomuser.me/api/portraits/med/women/33.jpg"},
	],
};

class Profile extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			portfolioDialog : {
				open : false,
				currentDocument: null
			},
			connectionsDialog: false,
			connectionsShowCount: 9,
			connections: []
		};
	}

	renderTags(){
		return user.tags.map((tag, index) => {
			return(
				<Chip
					key={index}
					backgroundColor={"#EA7600"}
					labelColor={"#FFF"}
					style={{textTransform: 'uppercase', float: 'left', marginRight: "10px", marginTop: "10px"}}
					className="tag-chip"
				>{tag}</Chip>
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

	renderAreasOfExpertise(){
		return user.areasOfExpertise.map((type, index) => {
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
		return user.timeline.map((content, index) => {
			return this['render'+content.type.charAt(0).toUpperCase()+content.type.slice(1)](content, index);
		});
	}

	toggleDialog(index){
		let dialog = this.state.portfolioDialog;
		dialog.open = !dialog.open;
		let currentDocument = user.documents.filter((doc, i) => {return index == i});
		dialog.currentDocument = currentDocument[0];
		this.setState({portfolioDialog : dialog});
	}

	renderPortfolio(){
		return user.documents.map((doc, index) => {
			return(
				<GridTile 
					key={index}
					title={<p>{doc.title}<span style={{float: "right", marginRight: "1rem", fontSize: "0.75rem", fontWeight: "400"}}>{doc.uploadedDate}</span></p>}
					titlePosition="top"
					titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
					cols={(index%3 == 2) ? 2 : 1}
					rows={1}
					className="portfolio-item"
					onTouchTap={() => this.toggleDialog(index)}
				>
					<div style={{background: "url('"+doc.image+"') center/cover", height: "100%"}}></div>
				</GridTile>
			);
		});
	}

	renderConnections(count = false){
		let users = (count) ? user.connections : this.state.connections;
		return users.map((user, index) => {
			if(count && index >= count)
				return;
			return(
				<ListItem
					key={user.id}
					primaryText={user.name}
					secondaryText={user.major+" "+user.grad}
					leftAvatar={<Avatar src={user.image} />}
					className="profile-connection" />
			);
		});
	}

	handleConnectionsDialogOpen(){
		this.setState({connectionsDialog: true});
	}

	handleConnectionsDialogClose(){
		this.setState({connectionsDialog: false});
	}

	searchUsers(event){
		let searchValue = event.target.value;
		let users = (length >= searchValue.length) ? this.getInitialConnectionsState() : this.state.connections.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);});
		length = searchValue.length;
		const result = users.filter(function(user, key) {
		    return user.name.toLowerCase().indexOf(searchValue) != -1;
		});
		this.setState({connections: result});
	}

	componentDidMount(){
		this.setState({connections: user.connections});
	}

	getInitialConnectionsState(){
		return user.connections;
	}

	render(){
		let image = (this.state.portfolioDialog.currentDocument) ? this.state.portfolioDialog.currentDocument.image : null;
		return(
			<div>
				<div className="hero-wrapper">
					<div className="hero-image-wrapper">
						<img src={user.backgroundUrl} />
						<div className="overlay"></div>
					</div>
					<div className="hero-details-outer-wrapper">
						<div className="hero-details-inner-wrapper" style={{paddingBottom: "4rem"}}>
							<div className="keep-center">
								<div className="profile-img">
									<img src={user.avatarUrl} />
								</div>
								<div className="profile-user-details">
									<h2 className="profile-name">{user.name}</h2>
									<h3 className="profile-school">{user.schools[0].name} - Class of {user.schools[0].year}</h3>
									<h3 className="profile-school">{user.currentStatus}</h3>
									<h3 className="profile-school">{user.city+', '+user.state}</h3>
									<div className="profile-social-wrapper">
										<a><FacebookIcon /></a>
										<a><TwitterIcon /></a>
										<a><LinkedinIcon /></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="keep-center" style={{marginTop: "-6rem", background: "#FFF"}}>
					<div className="content no-overlay">
						<Tabs 
							inkBarStyle={{backgroundColor: "#00A9E0"}}
							tabItemContainerStyle={{backgroundColor: "#FFF", width: "50%"}}
							contentContainerClassName="profile-tab-content-wrapper">
							<Tab className="page-header" label="About" style={{background: "#FFF", color: "#555"}}>
								<Card style={{padding: "1rem"}}>
									<div className="profile-detail-wrapper">
										<h2 className="profile-details-header"><IntroIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Intro<span><MapIcon />{user.city}, {user.state}</span></h2>
										<p>{user.description}</p>
									</div>
									<div className="profile-detail-wrapper">
										<h2 className="profile-details-header"><ExpertiseIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Areas of Expertise</h2>
										{this.renderAreasOfExpertise()}
									</div>
									<div className="profile-detail-wrapper">
										<h2 className="profile-details-header"><EducationIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Education</h2>
										{this.renderSchools()}
									</div>
									<div className="profile-detail-wrapper">
										<h2 className="profile-details-header"><ExperienceIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Experience</h2>
										{this.renderExperience()}
									</div>
									<div className="profile-detail-wrapper">
										<h2 className="profile-details-header"><TagsIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Tags</h2>
										{this.renderTags()}
									</div>
									<div className="profile-detail-wrapper">
										<h2 className="profile-details-header"><ConnectionIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Connections</h2>
										<List
											style={{overflow: "overlay"}}
										>
											{this.renderConnections(this.state.connectionsShowCount)}
										</List>
										{(this.state.connectionsShowCount < Object.keys(user.connections).length 
											&& <a onClick={this.handleConnectionsDialogOpen.bind(this)} style={{margin: "1rem auto", width: "100%", display: "block", textAlign: "center", color: "#00A9E0"}}>See All Attendees</a>)}
										<Dialog
											title="All Attendees"
											modal={false}
											open={this.state.connectionsDialog}
											onRequestClose={this.handleConnectionsDialogClose.bind(this)}>
											<TextField
												hintText="Search for connections by name"
												fullWidth={true}
												onChange={(e) => this.searchUsers(e)}
												inputStyle={{color: "#555"}}
											/>
											<List className="attendees-dialog-wrapper">
												{this.renderConnections()}
											</List>
										</Dialog>
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
							<RaisedButton label="Connect" primary={true} style={{marginTop: "1rem", marginRight: "1rem"}}/>
							<RaisedButton label="Message" style={{marginTop: "1rem", marginRight: "1rem", color: "#00A9E0"}}/>
						</div>
					</div>
				</div>			
			</div>
		);
	}
}

export default Profile;
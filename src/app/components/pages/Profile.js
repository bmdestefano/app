import React, {Component} from 'react';
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
let user = {
	avatarUrl: "https://www.filepicker.io/api/file/hDvuYs7eSNKDdWDwy4Mr",
	backgroundUrl: "http://www.bostonlogic.com/wp-content/uploads/2015/03/photodune-2705436-boston-waterfront-m1.jpg",
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
	bestAdvice: "Shoreditch yr taxidermy, retro kale chips roof party lumbersexual normcore bicycle rights selvage brooklyn neutra +1 williamsburg street art. Synth humblebrag vegan squid tote bag, neutra next level gluten-free +1 seitan tilde viral microdosing tofu tacos.",
	triumphs: ["Founded company at age 19", "Named Boston's Top 20 Under 20", "Graduated College at age 16"],
	authenticatedNetworks: [
		{name: "Facebook", image: <FacebookIcon />, url: "http://path/to/fbook"},
		{name: "Linkedin", image: <LinkedinIcon />, url: "http://path/to/linkedin"}
	],
	tags: [
		{name: "boston", match: true}, 
		{name: "history", match: false}, 
		{name: "wellness", match: false}, 
		{name: "dance", match: false}, 
		{name: "technology", match: true}, 
		{name: "running", match: true}, 
		{name: "biotechnology", match: false}, 
		{name: "business", match: true}, 
		{name: "data", match: false}, 
		{name: "research", match: true}, 
		{name: "jazz", match: false}, 
		{name: "engineering", match: true}, 
		{name: "health", match: true}
	],
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
			type: "resume",
			uploadedDate: "6/15/16",
			image: "https://s3-us-west-1.amazonaws.com/ctap-testing/resume.jpg",
			description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
			document: "/path/to/doc.pdf"
		},
		{
			title: "Remy Carpinito's Cover Letter",
			type: "cover-letter",
			uploadedDate: "6/15/16",
			image: "https://s3-us-west-1.amazonaws.com/ctap-testing/coverLetter.jpg",
			description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
			document: "/path/to/doc.pdf"
		},
		{
			title: "Twitter Redesign Project",
			type: "project",
			uploadedDate: "5/12/16",
			image: "https://s3-us-west-1.amazonaws.com/ctap-testing/twitterredesign.png",
			description: "This is a project I made for CS 560 as my final project.",
			document: "/path/to/doc.pdf"
		},
		{
			title: "Connect4 Python Project",
			type: "project",
			uploadedDate: "5/21/16",
			image: "https://nulogy.com/wp-content/uploads/2014/11/javascript-function-redux-es6-2.jpg",
			description: "This is a project I made for CS 587. It is a working Connect4 game made in Python.",
			document: "/path/to/doc.pdf"
		},
		{
			title: "Digital Marketing Project",
			type: "other",
			uploadedDate: "4/11/16",
			image: "https://s3-us-west-1.amazonaws.com/ctap-testing/marketingthing.jpg",
			description: "This is my final digital marketing project for MKT 610.",
			document: "/path/to/doc.pdf"
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
	groups : [
		{id: 0, name: "Accounting Majors", image: "http://cypresstxcpa.com/media/slider9/bookkeeping.png", members: 46},
		{id: 1, name: "Baseball Team", image: "http://dailybaseballdata.com/dbd/images/Baseball-Ball.ico", members: 16},
		{id: 2, name: "Marketing Club", image: "http://static1.squarespace.com/static/55e3cd18e4b06cf73ad26938/t/56f854c090634097447fd4c8/1459225399777/Online+Marketing+Santa+Barbara", members: 13},
		{id: 3, name: "LGBTQ Guidance", image: "https://s3.amazonaws.com/campustapstaging/2vi484CGQuCrlBUlQLdA_16e8b888982a4ac9833b78b1b6de55fd.png", members: 346},
		{id: 4, name: "Management 101", image: "https://s3.amazonaws.com/campustapstaging/YmYDZi2jTXe8iu9qhh09_cb71012be3614486a6bac85f286fa007.png", members: 41},
		{id: 5, name: "Alumni Job Openings", image: "https://s3.amazonaws.com/campustapstaging/GLNMD1XuSgWqVnMbwCNU_d8bead46b947463c89e6ad8e8c2231d7.png", members: 90},
		{id: 6, name: "Advertising Internships", image: "https://s3.amazonaws.com/campustapstaging/Pf5EayhISPKuwrp5Ml9y_5b0ae10bafe343e1b9bc1a7602cc9c9b.png", members: 46},
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
					<StarIcon style={{fill: "#143A7B", verticalAlign: "text-top"}}/>{type}
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
					style={{textTransform: 'uppercase', float: 'left', marginRight: "10px", marginTop: "10px"}}
					className="tag-chip"
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
					inkBarStyle={{backgroundColor: "#143A7B"}}
					tabItemContainerStyle={{backgroundColor: "#FFF"}}
					contentContainerClassName="profile-tab-content-wrapper"
					className="tab-split-wrapper">
					<Tab className="page-header" label="About" style={{background: "#FFF", color: "#555"}}>
						<Card style={{padding: "1rem", borderRadius: "0px"}}>
							<div className="profile-detail-wrapper">
								<h2 className="profile-details-header"><IntroIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Intro<span><MapIcon />{user.city}, {user.state}</span></h2>
								<p>{user.description}</p>
							</div>
							<div className="profile-detail-wrapper">
								<h2 className="profile-details-header"><InspirationIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Inspiration</h2>
								<p><span>Best Advice I Ever Received</span></p>
								<p>{user.bestAdvice}</p>
								<p style={{marginTop: "1rem"}}><span>Personal Triumphs</span></p>
								{user.triumphs.map((triumph, index) => {
									return(
										<ListItem 
											primaryText={triumph}
											leftIcon={<TriumphIcon style={{fill: "#143A7B"}}/>}
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
									<GroupIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Groups
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
							<div className="profile-detail-wrapper" style={{position: "relative"}}>
								<h2 className="profile-details-header">
									<TagsIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Tags
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
									<div style={{background: "url('"+((this.state.portfolioDialog.currentDocument) ? this.state.portfolioDialog.currentDocument.image : null)+"') center center/cover", marginBottom: "1rem", height: "12.5rem"}} ></div>
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
							<RaisedButton label="Cancel" style={{marginTop: "1rem", marginRight: "1rem", color: "#143A7B"}} onTouchTap={() => this.handleConnectDialogClose()}/>
						</div>
					</Dialog>
					<RaisedButton label="Message" style={{color: "#143A7B"}} onTouchTap={() => this.handleMessageDialogOpen()}/>
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
							<RaisedButton label="Cancel" style={{marginTop: "1rem", marginRight: "1rem", color: "#143A7B"}} onTouchTap={() => this.handleMessageDialogClose()}/>
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
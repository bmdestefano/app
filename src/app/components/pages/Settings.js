import React, {Component} from 'react';
import _ from 'underscore';
import ReactFilepicker from 'react-filepicker';
import areIntlLocalesSupported from 'intl-locales-supported';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import Card from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Avatar from 'material-ui/Avatar';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import LinearProgress from 'material-ui/LinearProgress';
import DatePicker from 'material-ui/DatePicker';

import AddIcon from 'material-ui/svg-icons/image/photo-camera';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import IntroIcon from 'material-ui/svg-icons/social/person';
import MapIcon from 'material-ui/svg-icons/maps/place';
import InspirationIcon from 'material-ui/svg-icons/image/blur-on';
import TriumphIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import ExitIcon from 'material-ui/svg-icons/content/clear';
import EducationIcon from 'material-ui/svg-icons/social/school';
import ExpertiseIcon from 'material-ui/svg-icons/maps/my-location';
import ExperienceIcon from 'material-ui/svg-icons/action/work';
import ConnectionIcon from 'material-ui/svg-icons/action/timeline';
import GroupIcon from 'material-ui/svg-icons/social/group';
import TagsIcon from 'material-ui/svg-icons/maps/local-offer';
import PostIcon from 'material-ui/svg-icons/action/description';
import CommentIcon from 'material-ui/svg-icons/communication/comment';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import CoverLetterIcon from 'material-ui/svg-icons/action/flip-to-front';
import ProjectIcon from 'material-ui/svg-icons/image/brush';
import OtherIcon from 'material-ui/svg-icons/action/extension';
import DownloadIcon from 'material-ui/svg-icons/file/file-download';
import AddDocumentIcon from 'material-ui/svg-icons/content/add';

import ProfileRenderer from '../ProfileRenderer';
import EditableField from '../EditableField';
import ImageListWithSearchableDialog from '../ImageListWithSearchableDialog';
import CTAutoComplete from '../CTAutoComplete';

let FacebookIcon = require('babel!svg-react!../../img/facebook-icon.svg?name=FacebookIcon');
let TwitterIcon = require('babel!svg-react!../../img/twitter-icon.svg?name=TwitterIcon');
let LinkedinIcon = require('babel!svg-react!../../img/linkedin-icon.svg?name=LinkedinIcon');
let user = {
	avatarUrl: "https://www.filepicker.io/api/file/hDvuYs7eSNKDdWDwy4Mr",
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
		{key: 4, label: "boston"}, 
		{key: 5, label: "history"}, 
		{key: 6, label: "wellness"}, 
		{key: 7, label: "dance"}, 
		{key: 8, label: "technology", match: true}, 
		{key: 9, label: "running", match: true}, 
		{key: 10, label: "biotechnology", match: false}, 
		{key: 11, label: "business", match: true}, 
		{key: 12, label: "data", match: false}, 
		{key: 13, label: "research", match: true}, 
		{key: 15, label: "jazz", match: false}, 
		{key: 16, label: "engineering", match: true}, 
		{key: 66, label: "health", match: true}
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
			image: "http://thumb1.shutterstock.com/display_pic_with_logo/2842531/272513510/stock-photo-closeup-of-resume-272513510.jpg",
			description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
			document: "/path/to/doc.pdf"
		},
		{
			title: "Remy Carpinito's Cover Letter",
			type: "cover-letter",
			uploadedDate: "6/15/16",
			image: "http://thumb7.shutterstock.com/display_pic_with_logo/307150/283436795/stock-vector-modern-cover-letter-design-with-blue-white-colors-283436795.jpg",
			description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you.",
			document: "/path/to/doc.pdf"
		},
		{
			title: "Twitter Redesign Project",
			type: "project",
			uploadedDate: "5/12/16",
			image: "http://thumb101.shutterstock.com/display_pic_with_logo/691372/154181867/stock-photo-brussels-september-twitter-is-going-public-on-september-in-brussels-154181867.jpg",
			description: "This is a project I made for CS 560 as my final project.",
			document: "/path/to/doc.pdf"
		},
		{
			title: "Connect4 Python Project",
			type: "project",
			uploadedDate: "5/21/16",
			image: "http://thumb7.shutterstock.com/display_pic_with_logo/1369678/410081401/stock-photo-smart-city-and-wireless-communication-network-iot-internet-of-things-ict-information-410081401.jpg",
			description: "This is a project I made for CS 587. It is a working Connect4 game made in Python.",
			document: "/path/to/doc.pdf"
		},
		{
			title: "Digital Marketing Project",
			type: "other",
			uploadedDate: "4/11/16",
			image: "http://thumb7.shutterstock.com/display_pic_with_logo/682636/407256469/stock-vector-big-infographics-in-flat-style-vector-illustrations-about-digital-projects-management-clients-407256469.jpg",
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
let availableSocialNetworks = [
	{name: "Facebook", image: <FacebookIcon />},
	{name: "Twitter", image: <TwitterIcon />},
	{name: "Linkedin", image: <LinkedinIcon />}
];
let availableAreasOfExpertise = [
	"Resume Reviews", 
	"Informational Interviews", 
	"General Career Advice",
	"Mock Interviews",
	"Transcript Review",
	"Job Shadowing"
];
let tags = [
	"Accounting", "United States", "Teaching"
];
const DEFAULT_BACKGROUND_URL = "http://www.bostonlogic.com/wp-content/uploads/2015/03/photodune-2705436-boston-waterfront-m1.jpg";
let careerPath = ["Setup Profile", "Upload Resume", "Setup Github Account", "Attend An Event"];
let DateTimeFormat;
if (areIntlLocalesSupported(['fr'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  const IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/fr');
}
class Settings extends Component{
	constructor(props, context){
		super(props, context);

		this.updateState = this.updateState.bind(this);
		this.state = {
			user: null,
			socialDialogOpen: false,
			expertiseLoader: false,
			newSchoolDialogOpen: false,
			newJobDialogOpen: false,
			tagsLoader: false,
			portfolioDialog : {
				open : false,
				currentDocument: null
			},
			documentDialogOpen: false,
			documentTypeValue: "resume",
			documentPrivacyValue: "public",
			documentImage: DEFAULT_BACKGROUND_URL,
			documentUrl: null,
			progressValue: 0,
			goals: [
				{progress: 0, name: "List 1", due: "1/03/17", goals: [{name:"Default 1", description: "t"}, {name:"Default 2", description: "t"}, {name:"Default 3", description: "t"}]},
				{progress: 0, name: "List 2", due: "2/12/17", goals: [{name:"Default 1", description: "t"}, {name:"Default 2", description: "t"}, {name:"Default 3", description: "t"}]},
			],
			addListDialogOpen: false,
			tasks: [],
			saveListDisabled: true,
		};
	}

	componentWillMount(){
		this.setState({user: user});
	}

	componentDidMount(){
		this.state.user.documents.unshift({});
	}

	updateState(key, value){
		this.setState({[key]:value});
	}

	handleUploadSuccess(type, fpfiles){
		let user = this.state.user;
		user[type] = fpfiles.url;
		this.updateState('user', user);
	}

	getHeroImageMarkup(){
		return(
			<div className="hero-image-wrapper">
				<img src={(this.state.user.backgroundUrl) ? this.state.user.backgroundUrl : DEFAULT_BACKGROUND_URL} />
				<div className="overlay"></div>
				<ReactFilepicker 
					apikey={"A4dOeHXUnQHS0qVUJYRRez"} 
					options={{
						buttonText: '',
						buttonClass: 'filepicker filepicker-background-photo',
						mimetype: 'image/*',
						webcamDim: [1280, 720],
						webcam: {
							videoRes: '1280x720'
						}
					}}
					onSuccess={this.handleUploadSuccess.bind(this, 'backgroundUrl')} 
				/>
				<List className="update-background-photo">
					<ListItem
						leftIcon={<AddIcon />}
						primaryText="Update Background Photo" />
				</List>
			</div>
		);
	}

	getAvatartImageMarkup(){
		return(
			<div className="profile-img">
				<img src={this.state.user.avatarUrl} />
				<ReactFilepicker 
					apikey={"A4dOeHXUnQHS0qVUJYRRez"} 
					options={{
						buttonText: '',
						buttonClass: 'filepicker filepicker-avatar-photo',
						mimetype: 'image/*',
						webcamDim: [1280, 720],
						webcam: {
							videoRes: '1280x720'
						}
					}}
					onSuccess={this.handleUploadSuccess.bind(this, 'avatarUrl')} 
				/>
				<List className="update-avatar-photo">
					<ListItem
						leftIcon={<AddIcon />}
						primaryText="Update Avatar" />
				</List>
			</div>
		);
	}

	showSocialDialog(){
		this.setState({socialDialogOpen: true});
	}

	handleSocialDialogClose(){
		this.setState({socialDialogOpen: false});
	}

	renderAuthenticatedNetworks(){
		return _.intersection(_.pluck(availableSocialNetworks, 'name'), _.pluck(this.state.user.authenticatedNetworks, 'name')).map((network, index) => {
			let url = this.state.user.authenticatedNetworks.filter((authNetwork, index) => {
				if(authNetwork.name == network)
					return authNetwork.url;
			});
			return(
				<ListItem>
					{network}
					<TextField defaultValue={url[0].url} style={{width: "100%"}}/>
				</ListItem>
			);
		});
	}

	renderEmptyNetworks(){
		return _.difference(_.pluck(availableSocialNetworks, 'name'), _.pluck(this.state.user.authenticatedNetworks, 'name')).map((network, index) => {
			let icon = (network == 'Facebook') 
				? <FacebookIcon style={{width: "1rem", height: "1rem"}}/>
				: ((network == 'Twitter')
					? <TwitterIcon style={{width: "1rem", height: "1rem"}}/>
					: <LinkedinIcon style={{width: "1rem", height: "1rem"}}/>);
			return(
				<ListItem primaryText={network}>
					<RaisedButton label="Authenticate" primary={true} icon={icon} style={{float: "right", marginTop: "-0.6rem"}}/>
				</ListItem>
			);
		});
	}

	getUserDetails(){
		return(
			<div className="profile-user-details">
				<EditableField text={this.state.user.name} cssClass="profile-name" width="75%" element="h3" height={60} onUpdate={this.updateState} user={this.state.user} field={"name"}/>
				<div>
					<h3 className="profile-school inline-block">{this.state.user.schools[0].name} - <span className="hidden-mobile">Class of </span>{this.state.user.schools[0].year}</h3>
					<RaisedButton 
						className="editable-btn"
						icon={<EditIcon />}
						onTouchTap={() => this.smoothScroll('schools')}
					/>
				</div>
				<div>
					<h3 className="profile-school inline-block">{this.state.user.currentStatus}</h3>
					<RaisedButton 
						className="editable-btn"
						icon={<EditIcon />}
						onTouchTap={() => this.smoothScroll('jobs')}
					/>
				</div>
				<div style={{width: "100%", overflow: "overlay"}}>
					<EditableField text={this.state.user.city} height={30} cssClass="profile-school--double-line" width="70%" style={{float: "left"}} element="h3" onUpdate={this.updateState} user={this.state.user} field={"city"}/>
					<EditableField text={this.state.user.state} height={30} cssClass="profile-school--double-line" width="35%" style={{float: "left"}} element="h3" onUpdate={this.updateState} user={this.state.user} field={"state"}/>
				</div>
				<div className="profile-social-wrapper">
					{this.state.user.authenticatedNetworks.map((network, index) => {
						return(
							<a>{network.image}</a>
						);
					})}
					<RaisedButton 
						className="editable-btn"
						icon={<EditIcon />}
						onTouchTap={() => this.showSocialDialog()}
					/>
					<Dialog
						title="Manage Your Social Networks"
						actions={[
							<RaisedButton
								label="Save"
								primary={true}
								onTouchTap={() => this.handleSocialDialogClose()}
								style={{marginRight: "1rem"}}
							/>,
							<RaisedButton
								label="Cancel"
								primary={false}
								onTouchTap={() => this.handleSocialDialogClose()}
							/>]
						}
						modal={false}
						open={this.state.socialDialogOpen}
						onRequestClose={() => this.handleSocialDialogClose()}
						>
							<List>
								{this.renderAuthenticatedNetworks()}
								{this.renderEmptyNetworks()}
							</List>
						</Dialog>
				</div>
			</div>
		);
	}

	currentYPosition() {
		// Firefox, Chrome, Opera, Safari
		if (self.pageYOffset) 
			return self.pageYOffset;
		// Internet Explorer 6 - standards mode
		if (document.documentElement && document.documentElement.scrollTop)
			return document.documentElement.scrollTop;
		// Internet Explorer 6, 7 and 8
		if (document.body.scrollTop) return document.body.scrollTop;
			return 0;
	}

	elmYPosition(eID) {
		var elm = document.getElementById(eID);
		var y = elm.offsetTop;
		var node = elm;
		while (node.offsetParent && node.offsetParent != document.body) {
			node = node.offsetParent;
			y += node.offsetTop;
		} return y;
	}

	smoothScroll(eID) {
		var startY = this.currentYPosition();
		var stopY = this.elmYPosition(eID);
		var distance = stopY > startY ? stopY - startY : startY - stopY;
		if (distance < 100) {
			scrollTo(0, stopY); 
			return;
		}
		var speed = Math.round(distance / 100);
		if (speed >= 20) 
			speed = 20;
		var step = Math.round(distance / 25);
		var leapY = stopY > startY ? startY + step : startY - step;
		var timer = 0;
		if (stopY > startY) {
			for ( var i=startY; i<stopY; i+=step ) {
				setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
				leapY += step; if (leapY > stopY) leapY = stopY; timer++;
			} 
			return;
		}
		for ( var i=startY; i>stopY; i-=step ) {
			setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
			leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
		}
		return false;
	}

	removeTriumph(triumphToRemove){
		let result = this.state.user.triumphs.filter((triumph, index) => {
			return triumph != triumphToRemove;
		});
		let user = this.state.user;
		user.triumphs = result;
		this.updateState("user", user);
	}

	addTriumph(){
		let user = this.state.user;
		user.triumphs.push(this.refs.newTriumph.getValue());
		this.updateState("user", user);
		document.getElementById('add-triumph').value = '';
	}

	saveNewAreaOfExpertise(){
		let globalThis = this;
		window.setTimeout(function(){
			globalThis.updateState("expertiseLoader", true);
		}, 1);
	}

	renderAreasOfExpertise(){
		return availableAreasOfExpertise.map((type, index) => {
			let active = this.state.user.areasOfExpertise.filter((activeType, index) => {
				return type == activeType;
			});
			return(
				<div key={index} className={"profile-details-subheader expertise-"+(index%3)} style={{marginBottom: "1rem", fontSize: "1.5rem", border: "0", textAlign: "center"}}>
					<Checkbox label={type} defaultChecked={(Object.keys(active).length > 0) ? true : false} onCheck={() => this.saveNewAreaOfExpertise()}/>
				</div>
			);
		});
	}

	showLoader(){
		if(!this.state.expertiseLoader)
			return;
		else{
			let globalThis = this;
			window.setTimeout(function(){
				globalThis.updateState("expertiseLoader", false);
			}, 3000);
			return(
				<RefreshIndicator 
					left={1000}
					top={10}
					status="loading"
					style={{top: "0rem", left: "18rem", transform: "none"}}
				/>
			);
		}
	}

	renderSchools(){
		return this.state.user.schools.map((school, index) => {
			return(
				<div className="profile-school-wrapper" key={index}>
					<RaisedButton 
						icon={<ExitIcon style={{fill: "#FFF"}}/>}
						label="Delete School"
						backgroundColor="#FF0000"
						labelColor="#FFF"
						style={{marginTop: "2rem", float: "right"}}
						onTouchTap={() => alert('deleted')}
					/>
					<EditableField 
						text={school.name} 
						width="100%" 
						element="h2" 
						onUpdate={this.updateState} 
						user={this.state.user} 
						field={"school"}
						cssClass="profile-details-subheader no-border"
						height={48}
					/>
					<p style={{float: "left", marginRight: "1rem"}}><span>Degree: </span></p>
					<EditableField 
						text={school.degree} 
						width="100%" 
						element="span" 
						onUpdate={this.updateState} 
						user={this.state.user} 
						field={"degree"}
						height={32}
					/>
					<p style={{float: "left", marginRight: "1rem"}}><span>Graduation Year: </span></p>
					<EditableField 
						text={school.year} 
						width="100%" 
						element="span" 
						onUpdate={this.updateState} 
						user={this.state.user} 
						field={"year"}
						height={32}
					/>
					<p style={{float: "left", marginRight: "1rem"}}><span>Major: </span></p>
					<EditableField 
						text={school.major} 
						width="100%" 
						element="p" 
						onUpdate={this.updateState} 
						user={this.state.user} 
						field={"major"}
						height={32}
					/>
					<p style={{float: "left", marginRight: "1rem"}}><span>Minor: </span></p>
					<EditableField 
						text={school.minor} 
						width="100%" 
						element="p" 
						onUpdate={this.updateState} 
						user={this.state.user} 
						field={"minor"}
						height={32}
					/>
				</div>
			);
		});
	}

	renderExperience(){
		return this.state.user.experience.map((job, index) => {
			return(
				<div className="profile-school-wrapper" key={index}>
					<RaisedButton 
						icon={<ExitIcon style={{fill: "#FFF"}}/>}
						label="Delete Job"
						backgroundColor="#FF0000"
						labelColor="#FFF"
						style={{marginTop: "2rem", float: "right"}}
						onTouchTap={() => alert('deleted')}
					/>
					<EditableField 
						text={job.company} 
						width="100%" 
						element="h2" 
						onUpdate={this.updateState} 
						user={this.state.user} 
						field={"company"}
						cssClass="profile-details-subheader no-border"
						height={48}
					/>
					<p style={{float: "left", marginRight: "1rem"}}><span>Start Year: </span></p>
					<EditableField 
						text={job.startYear} 
						width="100%" 
						element="span" 
						onUpdate={this.updateState} 
						user={this.state.user} 
						field={"startYear"}
						height={32}
					/>
					<p style={{float: "left", marginRight: "1rem"}}><span>End Year: </span></p>
					<EditableField 
						text={job.endYear} 
						width="100%" 
						element="span" 
						onUpdate={this.updateState} 
						user={this.state.user} 
						field={"endYear"}
						height={32}
					/>
					<p style={{float: "left", marginRight: "1rem"}}><span>Position: </span></p>
					<EditableField 
						text={job.position} 
						width="100%" 
						element="p" 
						onUpdate={this.updateState} 
						user={this.state.user} 
						field={"position"}
						height={32}
					/>
				</div>
			);
		});
	}

	openNewSchoolDialog(){
		this.setState({newSchoolDialogOpen: true});
	}

	closeNewSchoolDialog(){
		this.setState({newSchoolDialogOpen: false});
	}

	addNewSchool(){
		let user = this.state.user;
		user.schools.push({
			name: this.refs.newSchoolName.getValue(), 
			year: this.refs.newSchoolGraduationYear.getValue(), 
			major: this.refs.newSchoolMajor.getValue(), 
			minor: this.refs.newSchoolMinor.getValue(), 
			degree: this.refs.newSchoolDegree.getValue()
		});
		this.setState({user: user, newSchoolDialogOpen: false});
	}

	openNewJobDialog(){
		this.setState({newJobDialogOpen: true});
	}

	closeNewJobDialog(){
		this.setState({newJobDialogOpen: false});
	}

	addNewJob(){
		let user = this.state.user;
		user.experience.push({
			company: this.refs.newJobName.getValue(), 
			startYear: this.refs.newJobStartDate.getValue(), 
			endYear: this.refs.newJobEndDate.getValue(), 
			position: this.refs.newJobPosition.getValue(), 
		});
		this.setState({user: user, newJobDialogOpen: false});
	}

	getTagsLoader(){
		if(!this.state.tagsLoader)
			return;
		else{
			let globalThis = this;
			window.setTimeout(function(){
				globalThis.updateState("tagsLoader", false);
			}, 3000);
			return(
				<RefreshIndicator 
					left={1000}
					top={10}
					status="loading"
					style={{top: "0rem", left: "7rem", transform: "none"}}
				/>
			);
		}
	}

	deleteContent(contentToDelete){
		let newContent = this.state.user.timeline.filter((content,index) => {
			return content != contentToDelete;
		});
		let user = this.state.user;
		user.timeline = newContent;
		this.updateState("user", user);
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
					</List>
					<RaisedButton 
						label="Delete Post"
						backgroundColor="#FF0000"
						labelColor="#FFF"
						onTouchTap={() => this.deleteContent(post)}
						style={{marginTop: "1rem", width: "100%"}}
					/>
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
				<RaisedButton 
					label="Delete Comment"
					backgroundColor="#FF0000"
					labelColor="#FFF"
					onTouchTap={() => this.deleteContent(comment)}
					style={{marginTop: "1rem", width: "100%"}}
				/>
				</div>
			</Card>
		);
	}

	renderTimeline(){
		return this.state.user.timeline.map((content, index) => {
			return this['render'+content.type.charAt(0).toUpperCase()+content.type.slice(1)](content, index);
		});
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

	saveDocument(){
		let date = new Date();
		let newDocument = {
			title: this.refs.newDocumentName.getValue(),
			type: this.state.documentTypeValue,
			uploadedDate: date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear(),
			image: this.state.documentImage,
			description: this.refs.newDocumentDescription.getValue(),
			document: this.state.documentUrl
		};
		let user = this.state.user;
		user.documents.push(newDocument);
		this.setState({
			user: user, 
			documentDialogOpen: false,
			documentTypeValue: "resume",
			documentPrivacyValue: "public",
			documentImage: DEFAULT_BACKGROUND_URL,
			documentUrl: null
		});
	}

	handleDocumentTypeChange(event, index, value){
		this.setState({documentTypeValue: value});
	}

	handleDocumentPrivacyChange(event, index, value){
		this.setState({documentPrivacyValue: value});
	}

	onDocumentImageUploadSuccess(fpfiles){
		this.setState({documentImage: fpfiles.url});
	}

	onDocumentUploadSuccess(fpfiles){
		this.setState({documentUrl: fpfiles.url});
	}

	renderPortfolio(){
		return this.state.user.documents.map((doc, index) => {
			return((index == 0)
				? <GridTile 
					cols={(index%3 == 2 || window.outerWidth < 768) ? 2 : 1}
					rows={1}
					className="portfolio-item"
					style={{position: "relative"}}
					onTouchTap={() => this.updateState("documentDialogOpen", true)}
				>
					<AddDocumentIcon 
						style={{position: "absolute", width: "3rem", height: "3rem", left: "50%", marginLeft: "-1.5rem", top: "25%", fill: "#555"}}
					/>
					<h2
						style={{position: "absolute", textAlign: "center", top: "55%", color: "#555", width: "100%", fontSize: "2rem"}}
					>Add New Document</h2>
					<Dialog
						title="Add A New Document"
						actions={[
							<RaisedButton
								label="Save"
								primary={true}
								onTouchTap={() => this.saveDocument()}
								style={{marginRight: "1rem"}}
							/>,
							<RaisedButton
								label="Cancel"
								primary={false}
								onTouchTap={() => this.updateState("documentDialogOpen", false)}
							/>]
						}
						modal={false}
						open={this.state.documentDialogOpen}
						onRequestClose={() => this.updateState("documentDialogOpen", false)}
						>
							<TextField floatingLabelText="Document Name" ref="newDocumentName" fullWidth={true}/>
							<SelectField value={this.state.documentTypeValue} onChange={this.handleDocumentTypeChange.bind(this)} style={{width: "49%", float: "left"}} ref="newDocumentType">
								<MenuItem value={"resume"} primaryText="Resume" />
								<MenuItem value={"coverLetter"} primaryText="Cover Letter" />
								<MenuItem value={"project"} primaryText="Project" />
								<MenuItem value={"other"} primaryText="Other" />
							</SelectField>
							<SelectField value={this.state.documentPrivacyValue} onChange={this.handleDocumentPrivacyChange.bind(this)} style={{width: "49%", float: "right"}} ref="newDocumentPrivacy">
								<MenuItem value={"public"} primaryText="Public" />
								<MenuItem value={"private"} primaryText="Private" />
							</SelectField>
							<TextField floatingLabelText="Document Description" ref="newDocumentDescription" fullWidth={true} />
							<RaisedButton
								label="Upload An Image (optional)"
								style={{position: "absolute", left: "1.5rem", bottom: "15.5rem"}}
							/>
							<img src={this.state.documentImage} style={{width: "10rem", height: "10rem", marginTop: "3rem"}} ref="newDocumentImage"/>
							<ReactFilepicker apikey={"A4dOeHXUnQHS0qVUJYRRez"} 
								options={{
									buttonText: '',
									buttonClass: 'filepicker filepicker-document-image',
									mimetype: 'image/*',
									webcamDim: [1280, 720],
									webcam: {
										videoRes: '1280x720'
									}
								}}
								onSuccess={this.onDocumentImageUploadSuccess.bind(this)} 
							/>
							<RaisedButton
								label="Upload Document"
								style={{position: "absolute", left: "17rem", bottom: "15.5rem"}}
							/>
							<ReactFilepicker apikey={"A4dOeHXUnQHS0qVUJYRRez"} 
								options={{
									buttonText: '',
									buttonClass: 'filepicker filepicker-document',
									webcamDim: [1280, 720],
									webcam: {
										videoRes: '1280x720'
									}
								}}
								onSuccess={this.onDocumentUploadSuccess.bind(this)} 
							/>
							<p style={{position: "absolute", left: "17rem", bottom: "8rem"}} ref="newDocumentFile">{this.state.documentUrl}</p>
						</Dialog>
				</GridTile>
				:
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

	incrementProgress(index, checked){
		let globalThis = this;
		let increment = 100/careerPath.length;
		window.setTimeout(function(){
			globalThis.setState({progressValue: (checked) ? (globalThis.state.progressValue + increment) : (globalThis.state.progressValue - increment)});
		}, 1);
	}

	renderCareerPath(){
		return careerPath.map((item, index) => {
			return(
				<ListItem primaryText={item} leftIcon={<Checkbox onCheck={this.incrementProgress.bind(this)}/>} className="hover-transparent"/>
			);
		});
	}

	incrementGoalsProgress(index, event, checked){
		let goals = this.state.goals;
		let increment = 100/goals[index].goals.length;
		goals[index].progress = (checked) ? (goals[index].progress + increment) : (goals[index].progress - increment);
		let globalThis = this;
		window.setTimeout(function(){
			globalThis.setState({goals: goals});
		}, 1);
	}

	renderGoalsList(){
		return this.state.goals.map((goalList, index) => {
			return (
			<div className={(index%2 == 0) ? "goals-list-left" : "goals-list-right"} style={{marginBottom: "3rem"}}>
				<h2 style={{marginBottom: "1rem", fontSize: "1.5rem"}} className="brand-color">{this.state.goals[index].name}</h2>
				<LinearProgress mode="determinate" color="#FCB606" value={this.state.goals[index].progress} />
				<p style={{marginTop: "1rem", color: "#555"}}><span className="brand-color">Progress: </span>{Math.round(this.state.goals[index].progress)+"%"}<p style={{float: "right"}}> {this.state.goals[index].due} </p><span style={{float: "right", marginRight: "0.25rem"}}>Due Date:</span></p>
				<List>
					{this.renderGoals(goalList)}
				</List>
			</div>
			);	
		});
	}

	renderGoals(list){
		return list.goals.map((goal, index) => {
			return(
				<ListItem primaryText={goal.name} secondaryText={goal.description} leftIcon={<Checkbox onCheck={this.incrementGoalsProgress.bind(this, this.state.goals.indexOf(list))}/>} className="hover-transparent"/>
			);
		});
	}

	renderTaskList(){
		return this.state.tasks.map((task, index) => {
			return(
				<ListItem primaryText={task.name} secondaryText={task.description} className="hover-transparent" rightIcon={<ExitIcon style={{fill: "#FF0000"}} onTouchTap={() => this.removeTask(index)} />}/>
			);
		});
	}

	addTask(){
		let task = {
			name: this.refs.newTaskName.getValue(),
			description: this.refs.newTaskDesc.getValue()
		};
		document.getElementById('new-task-name').value = '';
		document.getElementById('new-task-desc').value = '';
		let tasks = this.state.tasks;
		tasks.push(task);
		this.setState({tasks: tasks});
	}

	removeTask(indexToRemove){
		let result = this.state.tasks.filter((task, index) => {
			return index != indexToRemove;
		});
		this.setState({tasks: result});
	}

	saveNewList(){
		let list = {
			progress: 0, 
			name: this.refs.newListName.getValue(), 
			due: this.state.newListDate, 
			goals: this.state.tasks
		};
		let lists = this.state.goals;
		lists.push(list);
		this.setState({goals: lists, addListDialogOpen: false});
	}

	addNewListDate(e, date){
		let d = new Date(date);
		this.updateState("newListDate", d.getMonth()+"/"+d.getDate()+"/"+d.getFullYear());
	}

	getTabs(){
		return(
			<div>
				<Tabs 
					inkBarStyle={{backgroundColor: "#143A7B"}}
					tabItemContainerStyle={{backgroundColor: "#FFF"}}
					contentContainerClassName="profile-tab-content-wrapper">
					<Tab className="page-header" label="Career Path" style={{background: "#FFF", color: "#555"}}>
						<Card style={{padding: "1rem", borderRadius: "0px"}}>
							<div className="profile-detail-wrapper" style={{overflow: "visible"}}>
								<h2 style={{textAlign: "center", marginBottom: "1rem", color: "#555", fontSize: "1.5rem"}}>Use the list below to get started on CampusTap and begin your career</h2>
								<LinearProgress mode="determinate" color="#FCB606" value={this.state.progressValue} />
								<p style={{marginTop: "1rem", color: "#555"}}><span>Progress: </span>{Math.round(this.state.progressValue)+"%"}<p style={{float: "right"}}> 12/24/16 </p><span style={{float: "right", marginRight: "0.25rem"}}>Due Date:</span></p>
								<List>
									{this.renderCareerPath()}
								</List>
							</div>
						</Card>
					</Tab>
					<Tab className="page-header" label="About" style={{background: "#FFF", color: "#555"}}>
						<Card style={{padding: "1rem", borderRadius: "0px"}}>
							<div className="profile-detail-wrapper" style={{overflow: "visible"}}>
								<h2 className="profile-details-header"><IntroIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Intro<span><MapIcon />{this.state.user.city}, {this.state.user.state}</span></h2>
								<EditableField 
									text={this.state.user.description} 
									width="100%" 
									element="p" 
									onUpdate={this.updateState} 
									user={this.state.user} 
									field={"description"}
								/>
							</div>
							<div className="profile-detail-wrapper">
								<h2 className="profile-details-header"><InspirationIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Inspiration</h2>
								<p><span>Best Advice I Ever Received</span></p>
								<EditableField 
									text={this.state.user.bestAdvice} 
									width="100%" 
									element="p" 
									onUpdate={this.updateState} 
									user={this.state.user} 
									field={"bestAdvice"}
								/>
								<p style={{marginTop: "1rem"}}><span>Personal Triumphs</span></p>
								{this.state.user.triumphs.map((triumph, index) => {
									return(
										<ListItem 
											leftIcon={<TriumphIcon style={{fill: "#143A7B"}}/>}
											className="hover-transparent"
										>{triumph}<ExitIcon onTouchTap={() => this.removeTriumph(triumph)} style={{fill: "#FF0000", verticalAlign: "top", marginLeft: "1rem", marginTop: "-0.3rem"}} />
										</ListItem>
									);
								})}
								<ListItem
									className="hover-transparent"
								>
									<TextField
										id="add-triumph" 
										hintText="Add A Triumph"
										ref="newTriumph"
										style={{width: "90%"}}
									/>
									<RaisedButton label="Add" primary={true} style={{float: "right", marginTop: "0rem"}} onTouchTap={() => this.addTriumph()}/>
								</ListItem>	
							</div>
							<div className="profile-detail-wrapper">
								<h2 className="profile-details-header" style={{position: "relative", lineHeight: "3rem"}}>
									<ExpertiseIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem", marginBottom: "0.75rem"}}/>Areas of Expertise
									{this.showLoader()}
								</h2>
								{this.renderAreasOfExpertise()}
							</div>
							<div id="schools" className="profile-detail-wrapper" style={{overflow: "hidden"}}>
								<h2 className="profile-details-header"><EducationIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Education</h2>
								{this.renderSchools()}
								<RaisedButton label="Add New School" primary={true} onTouchTap={() => this.openNewSchoolDialog()} style={{marginTop: "1rem"}}/>
								<Dialog
									title="Add A New School"
									actions={[
										<RaisedButton
											label="Save"
											primary={true}
											onTouchTap={() => this.addNewSchool()}
											style={{marginRight: "1rem"}}
										/>,
										<RaisedButton
											label="Cancel"
											primary={false}
											onTouchTap={() => this.closeNewSchoolDialog()}
										/>]
									}
									modal={false}
									open={this.state.newSchoolDialogOpen}
									onRequestClose={() => this.closeNewSchoolDialog()}
									>
										<TextField floatingLabelText="Name" ref="newSchoolName" fullWidth={true} />
										<TextField floatingLabelText="Degree" ref="newSchoolDegree" fullWidth={true} />
										<TextField floatingLabelText="Graduation Year" ref="newSchoolGraduationYear" fullWidth={true} />
										<TextField floatingLabelText="Major" ref="newSchoolMajor" fullWidth={true} />
										<TextField floatingLabelText="Minor" ref="newSchoolMinor" fullWidth={true} />
									</Dialog>
							</div>
							<div id="jobs" className="profile-detail-wrapper" style={{overflow: "hidden"}}>
								<h2 className="profile-details-header"><ExperienceIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Experience</h2>
								{this.renderExperience()}
								<RaisedButton label="Add New Job" primary={true} onTouchTap={() => this.openNewJobDialog()} style={{marginTop: "1rem"}}/>
								<Dialog
									title="Add A New Job"
									actions={[
										<RaisedButton
											label="Save"
											primary={true}
											onTouchTap={() => this.addNewJob()}
											style={{marginRight: "1rem"}}
										/>,
										<RaisedButton
											label="Cancel"
											primary={false}
											onTouchTap={() => this.closeNewJobDialog()}
										/>]
									}
									modal={false}
									open={this.state.newJobDialogOpen}
									onRequestClose={() => this.closeNewJobDialog()}
									>
										<TextField floatingLabelText="Name" ref="newJobName" fullWidth={true} />
										<TextField floatingLabelText="Position" ref="newJobPosition" fullWidth={true} />
										<TextField floatingLabelText="Start Date Year" ref="newJobStartDate" fullWidth={true} />
										<TextField floatingLabelText="End Date Year" ref="newJobEndDate" fullWidth={true} />
									</Dialog>
							</div>
							<div className="profile-detail-wrapper">
								<h2 className="profile-details-header">
									<ConnectionIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Connections
								</h2>
								<ImageListWithSearchableDialog 
										showCount={9}
										items={this.state.user.connections}
										primaryTextField={"name"}
										secondaryTextField={"major"}
										avatarSrcField={"image"}
										listType="Connections"
										itemClass="one-third"
										openText="Manage Connections"
										edit={true}
									/>
							</div>
							<div className="profile-detail-wrapper">
								<h2 className="profile-details-header">
									<GroupIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Groups
								</h2>
								<ImageListWithSearchableDialog 
									showCount={6}
									items={this.state.user.groups}
									primaryTextField={"name"}
									secondaryTextField={"members"}
									secondaryTextFieldLabel={"Members: "}
									avatarSrcField={"image"}
									listType="Groups"
									itemClass="one-third"
									openText="See All Groups"
									edit={true}
								/>
							</div>
							<div className="profile-detail-wrapper" style={{position: "relative", lineHeight: "3rem"}}>
								<h2 className="profile-details-header">
									<TagsIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem", marginBottom: "0rem"}}/>Tags
								</h2>
								{this.getTagsLoader()}
								<CTAutoComplete 
									data={tags}
									floatingText="Enter Tags"
									hintText="i.e. Accounting"
									existingData={this.state.user.tags}
								/>
								<RaisedButton
									label="Save"
									primary={true}
									onTouchTap={() => this.showTagsSave()}
									style={{float: "left"}} />
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
					<Tab className="page-header" label="Goals" style={{background: "#FFF", color: "#555"}}>
						<Card style={{padding: "1rem", borderRadius: "0px"}}>
							<RaisedButton 
								label="Add New List"
								primary={true}
								style={{marginBottom: "1rem"}}
								onTouchTap={() => this.updateState("addListDialogOpen", true)}
							/>
							<Dialog
								title="Add A New List"
								actions={[
									<RaisedButton
										label="Save"
										primary={true}
										onTouchTap={() => this.saveNewList()}
										style={{marginRight: "1rem"}}
										disabled={this.state.saveListDisabled}
									/>,
									<RaisedButton
										label="Cancel"
										primary={false}
										onTouchTap={() => this.updateState("addListDialogOpen", false)}
									/>]
								}
								modal={false}
								open={this.state.addListDialogOpen}
								onRequestClose={() => this.updateState("addListDialogOpen", false)}
								>
									<TextField floatingLabelText="List Name" ref="newListName" style={{width: "60%"}} onBlur={() => this.updateState("saveListDisabled", false)}/>
									<DatePicker
										hintText="Due Date"
										firstDayOfWeek={0}
										formatDate={new DateTimeFormat('en-US', {
											day: 'numeric',
											month: 'long',
											year: 'numeric',
										}).format}
										style={{float: "right", marginTop: "1.5rem"}}
										onChange={(event, date) => this.addNewListDate(event, date)}
									/>
									<TextField floatingLabelText="Task Name" fullWidth={true} ref="newTaskName" id="new-task-name"/>
									<TextField floatingLabelText="Task Description" multiLine={true} style={{width: "75%"}} rowsMax={4} ref="newTaskDesc" id="new-task-desc"/>
									<RaisedButton label="Add Task" onTouchTap={() => this.addTask()} style={{float: "right", marginTop: "3rem"}}/>
									<List>
										{this.renderTaskList()}
									</List>	
								</Dialog>
							<div className="profile-detail-wrapper" style={{overflow: "overlay"}}>
								{this.renderGoalsList()}
							</div>
						</Card>
					</Tab>
				</Tabs>
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

export default Settings;
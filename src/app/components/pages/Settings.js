import React, {Component} from 'react';
import _ from 'underscore';
import ReactFilepicker from 'react-filepicker';
import areIntlLocalesSupported from 'intl-locales-supported';
import User from '../../models/User';
import School from '../../models/School';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
import { Link } from 'react-router'

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
let careerPath = [
	{url: "http://snhu.edu", name: "Register for your classes", description: "As an engineer you have to take ENG 101, 201 and 230 before your electives"},
	{url: "http://snhu.edu", name: "Complete financial aid requirements", description: "Please report income, taxes and W4 in order to qualify"},
  {url: '', name:"Create a Github account", description:"Github allows you to share your works with prospective employers and will help them see what you are capable of."},
  {url: true, name:"Attend Networking events", description:"Attend company information sessions to learn more about the various engineering careers and begin to build relationships with recruiters"},
  {url: "http://staging.thecampustap.com/people", name:"Leverage your network", description:"Utilizing your network is an extremely important to finding a job in any field but especially engineering. Being able to network with other engineers can get a you a good recommendation which can help "},
  {url: '', name:"Reflect and figure out what your strengths are", description:"Assess and develop your skills in critical thinking, problem-solving, communication, and teamwork through both academic and extracurricular activities."},
  {url: '', name:"Create a resume", description:"Attending resume workshops can do wonders for your resume but in addition spend a lot of time editing and relflecting on yourself. Add anything you believe will give you a leg up in career searching."},
  {url: '', name:"Fine tune your interview skills by doing a mock interview", description:"If you have someone in your network that could mentor you on interviewing skills, do it. Try to find someone who will have time to do a mock interview, they often can really help your interview skills."},
  {url: '', name:"Look for Job opportunities", description:"Scouting job boards as well as contacting recruiters is a great way to get leads on possible job opportunities"},
  {url: '', name:"Reach out to employers after you have found a lead", description:"Once you have a possible lead submit all the information you have including your resume and github to the employer. Once you have done this follow up and try to get an interview."}
];
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
				{progress: 0, name: "Internship Tracker", due: "1/03/17", goals: [
					{name:"Upload internship form", description: "Please upload to http://www.snhu.edu"}, 
					{name:"Contact your career advisor", description: "Your advisor is Bob Costas"}, 
					{name:"Contact the company sponsor", description: "Contact at Fidelity is Janet Green"},
					{name:"Send weekly report to your career advisor", description: "Please use formatting from SNHU"},
					{name:"Internship supervisor sign-off"}]}
			],
			addListDialogOpen: false,
			tasks: [],
			saveListDisabled: true,
		};
	}

	componentWillMount(){
		this.setState({user: user});
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

	getAvatarImageMarkup(){
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
						primaryText="Update Avatar"
						className="text-center" />
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
		(this.state.user.documents.length == 6)
			? this.state.user.documents
			: this.state.user.documents.unshift({});
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

				<ListItem 
					primaryText={<div><p>{item.name}</p>{
						(item.url == true && <Link style={{float:"right", "marginTop": "-1rem", fontSize: "1.15rem"}} to="/event">Event</Link>)}
						{(item.url == "http://staging.thecampustap.com/people" && <a style={{float:"right", "marginTop": "-1rem", fontSize: "1.15rem"}} href="http://staging.thecampustap.com/people" target="_blank">Network</a>)}
						{
						(item.url == "http://snhu.edu" && <a style={{float:"right", "marginTop": "-1rem", fontSize: "1.15rem"}} href="http://snhu.edu" target="_blank">SNHU</a>)}</div>} 
					secondaryText={item.description} secondaryTextLines={2} leftIcon={<Checkbox onCheck={this.incrementProgress.bind(this)}/>} className="hover-transparent"/>
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
				<LinearProgress mode="determinate" color={muiTheme.palette.accent1Color} value={this.state.goals[index].progress} />
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
					inkBarStyle={{backgroundColor: muiTheme.palette.primary1Color}}
					tabItemContainerStyle={{backgroundColor: "#FFF"}}
					contentContainerClassName="profile-tab-content-wrapper">
					<Tab className="page-header" label="My Path" style={{background: "#FFF", color: "#555"}}>
						<Card style={{padding: "1rem", borderRadius: "0px"}}>
							<div className="profile-detail-wrapper" style={{overflow: "visible"}}>
								<h2 style={{textAlign: "center", marginBottom: "1rem", color: "#555", fontSize: "1.5rem"}}>Complete the steps below to jumpstart your <span style={{background: muiTheme.palette.primary1Color, color: "#FFF", padding: "0 0.5rem"}}>ENGINEERING</span> career</h2>
								<LinearProgress mode="determinate" color={muiTheme.palette.accent1Color} value={this.state.progressValue} />
								<p style={{marginTop: "1rem", color: "#555"}}><span>Progress: </span>{Math.round(this.state.progressValue)+"%"}<p style={{float: "right"}}> 12/24/16 </p><span style={{float: "right", marginRight: "0.25rem"}}>Due Date:</span></p>
								<List>
									{this.renderCareerPath()}
								</List>
							</div>
						</Card>
					</Tab>
					<Tab className="page-header" label="About" style={{background: "#FFF", color: "#555"}}>
						<Card style={{padding: "1rem"}}>
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
				avatarImageMarkup={this.getAvatarImageMarkup()}
				userDetails={this.getUserDetails()}
				tabs={this.getTabs()}
			/>
		);
	}
}

export default Settings;
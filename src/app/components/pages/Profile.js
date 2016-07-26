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
	areasOfExpertise: ["Resume Reviews", "Informational Interviews"],
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
		},
	],
};

class Profile extends Component{
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
				<div key={index} style={{marginLeft: "1rem", marginBottom: "1rem"}}>
					<StarIcon style={{fill: "#00A9E0", verticalAlign: "sub"}}/>{type}
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
			<div style={{marginBottom: "2rem"}}>
				<h2 className="profile-details-header"><PostIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Post<span>{post.posted} ago</span></h2>
				<div className="profile-timeline-content-wrapper">
					{(post.content.startsWith("https://www"))
						? <iframe width="560" height="315" src={post.content} frameborder="0" allowfullscreen></iframe>
						: <p>{post.content}</p>
					}
					<p style={{marginTop: "1rem"}}><FavoriteIcon style={{fill: "#555", verticalAlign: "middle"}}/> {post.favoriteCount} <CommentIcon style={{fill: "#555", verticalAlign: "middle"}}/> {post.commentCount}</p>
					<List style={{background: "#EEE", margin: "1rem 0"}}>
						{(post.comments && this.renderPostComments(post.comments))}
						<ListItem className="add-comment">
							<TextField hintText="Post A Comment" style={{width: "85%"}}/>
							<RaisedButton label="Comment" primary={true} style={{float: "right", zIndex: "1"}}/>
						</ListItem>	
					</List>
				</div>
				{(index != user.timeline.length - 1 
					&& <hr />)}
			</div>
		);
	}

	renderComment(comment, index){
		return(
			<div style={{marginBottom: "2rem"}}>
				<h2 className="profile-details-header"><CommentIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Comment<span>{comment.posted} ago</span></h2>
				<div className="profile-timeline-content-wrapper">
					<p>{comment.content}</p>
				</div>
				{(index != user.timeline.length - 1 
					&& <hr />)}
			</div>
		);
	}

	renderTimeline(){
		return user.timeline.map((content, index) => {
			return this['render'+content.type.charAt(0).toUpperCase()+content.type.slice(1)](content, index);
		});
	}

	render(){
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
				<Card className="keep-center" style={{marginTop: "-6rem"}}>
					<div className="content">
						<Tabs 
							inkBarStyle={{backgroundColor: "#00A9E0"}}
							tabItemContainerStyle={{backgroundColor: "#FFF", width: "50%"}}
							contentContainerClassName="profile-tab-content-wrapper">
							<Tab className="page-header" label="About" style={{background: "#FFF", color: "#555"}}>
								<div className="profile-detail-wrapper">
									<h2 className="profile-details-header"><IntroIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Intro<span><MapIcon />{user.city}, {user.state}</span></h2>
									<p>{user.description}</p>
									<h4 style={{marginTop: "1rem", fontWeight: "500", marginBottom: "0.5rem"}}>Areas of Expertise:</h4>
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
							</Tab>
							<Tab className="page-header" label="Timeline" style={{background: "#FFF", color: "#555"}}>
								<div className="profile-detail-wrapper">
									{this.renderTimeline()}
								</div>
							</Tab>
							<Tab className="page-header" label="E-Portfolio" style={{background: "#FFF", color: "#555"}}>
								<div className="profile-detail-wrapper">
									<h2 className="profile-details-header"><PostIcon style={{fill:"#CCC", verticalAlign: "bottom", marginRight: "0.5rem"}}/>Documents</h2>
									<List className="profile-portfolio-wrapper">
										<ListItem 
											primaryText="Resume"
											initiallyOpen={true}
											className="portfolio-item"
											nestedItems={[
												<ListItem 
													key={1}
													rightIcon={<DownloadIcon />}
													primaryText={<p>Remy Carpinito's Resume<span style={{float: "right", fontSize: "0.75rem"}}>Uploaded 6/14/16</span></p>}
													secondaryText="Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."
													secondaryTextLines={4}
													className="portfolio-sub-item"
												/>
											]}
										/>
										<ListItem 
											primaryText="Cover Letter"
											initiallyOpen={true}
											className="portfolio-item"
											nestedItems={[
												<ListItem 
													key={1}
													rightIcon={<DownloadIcon />}
													primaryText={<p>Remy Carpinito's Cover Letter<span style={{float: "right", fontSize: "0.75rem"}}>Uploaded 6/15/16</span></p>}
													secondaryText="Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out."
													secondaryTextLines={2}
													className="portfolio-sub-item"
												/>
											]}
										/>
										<ListItem 
											primaryText="Projects"
											initiallyOpen={true}
											className="portfolio-item"
											nestedItems={[
												<ListItem 
													key={1}
													rightIcon={<DownloadIcon />}
													primaryText={<p>Twitter Design Challenge<span style={{float: "right", fontSize: "0.75rem"}}>Uploaded 7/14/16</span></p>}
													secondaryText="This is my final project for CAS 560, a re-designed Twitter. Yada yada yada more text here."
													secondaryTextLines={2}
													className="portfolio-sub-item"
												/>,
												<ListItem 
													key={2}
													rightIcon={<DownloadIcon />}
													primaryText={<p>Connect4 Python Project<span style={{float: "right", fontSize: "0.75rem"}}>Uploaded 7/14/16</span></p>}
													secondaryText="This is a project I did for CAS 510, a fully-functional Connect4 made in Python."
													secondaryTextLines={2}
													className="portfolio-sub-item"
												/>
											]}
										/>
										<ListItem 
											primaryText="Other"
											initiallyOpen={true}
											className="portfolio-item"
											nestedItems={[
												<ListItem 
													key={1}
													rightIcon={<DownloadIcon />}
													primaryText={<p>Document #1<span style={{float: "right", fontSize: "0.75rem"}}>Uploaded 7/02/16</span></p>}
													secondaryText="This is another document."
													secondaryTextLines={2}
													className="portfolio-sub-item"
												/>,
												<ListItem 
													key={2}
													rightIcon={<DownloadIcon />}
													primaryText={<p>Document #2<span style={{float: "right", fontSize: "0.75rem"}}>Uploaded 7/02/16</span></p>}
													secondaryText="This is yet another document."
													secondaryTextLines={2}
													className="portfolio-sub-item"
												/>
											]}
										/>
									</List>
								</div>
							</Tab>
						</Tabs>
						<div className="profile-action-btn-wrapper">
							<RaisedButton label="Connect" primary={true} style={{marginTop: "1rem", marginRight: "1rem"}}/>
							<RaisedButton label="Message" style={{marginTop: "1rem", marginRight: "1rem", color: "#00A9E0"}}/>
						</div>
					</div>
				</Card>			
			</div>
		);
	}
}

export default Profile;
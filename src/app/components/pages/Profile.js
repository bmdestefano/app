import React, {Component} from 'react';
import ProfileRenderer from '../ProfileRenderer';

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
	bestAdvice: "Shoreditch yr taxidermy, retro kale chips roof party lumbersexual normcore bicycle rights selvage brooklyn neutra +1 williamsburg street art. Synth humblebrag vegan squid tote bag, neutra next level gluten-free +1 seitan tilde viral microdosing tofu tacos.",
	triumphs: ["Founded company at age 19", "Named Boston's Top 20 Under 20", "Graduated College at age 16"],
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
			image: "http://thumb1.shutterstock.com/display_pic_with_logo/2842531/272513510/stock-photo-closeup-of-resume-272513510.jpg",
			description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you."
		},
		{
			title: "Remy Carpinito's Cover Letter",
			type: "cover-letter",
			uploadedDate: "6/15/16",
			image: "http://thumb7.shutterstock.com/display_pic_with_logo/307150/283436795/stock-vector-modern-cover-letter-design-with-blue-white-colors-283436795.jpg",
			description: "Hello everyone! I am a Corporate Finance and Accounting major, class of 2017. I am looking for mentors within the tech space, as I am trying to launch and app and am in need of someone with a background in app development to help me out. If you, or someone you know is an experienced developer/coder please ask me for contact information and I would be more than happy to share that with you."
		},
		{
			title: "Twitter Redesign Project",
			type: "project",
			uploadedDate: "5/12/16",
			image: "http://thumb101.shutterstock.com/display_pic_with_logo/691372/154181867/stock-photo-brussels-september-twitter-is-going-public-on-september-in-brussels-154181867.jpg",
			description: "This is a project I made for CS 560 as my final project."
		},
		{
			title: "Connect4 Python Project",
			type: "project",
			uploadedDate: "5/21/16",
			image: "http://thumb7.shutterstock.com/display_pic_with_logo/1369678/410081401/stock-photo-smart-city-and-wireless-communication-network-iot-internet-of-things-ict-information-410081401.jpg",
			description: "This is a project I made for CS 587. It is a working Connect4 game made in Python."
		},
		{
			title: "Digital Marketing Project",
			type: "other",
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

		this.state = {};
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
					<a><FacebookIcon /></a>
					<a><TwitterIcon /></a>
					<a><LinkedinIcon /></a>
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
			/>
		);
	}
}

export default Profile;
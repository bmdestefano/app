import React, {Component} from 'react';
import Card from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import {List, ListItem} from 'material-ui/List';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';
import Hero from '../Hero';
import SaveIcon from 'material-ui/svg-icons/action/bookmark-border';
import SavedIcon from 'material-ui/svg-icons/action/bookmark';
import RightArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import WalkIcon from 'material-ui/svg-icons/maps/directions-walk';
import BikeIcon from 'material-ui/svg-icons/maps/directions-bike';
import DriveIcon from 'material-ui/svg-icons/maps/directions-car';
import SubwayIcon from 'material-ui/svg-icons/maps/directions-railway';
let AppleIcon = require('babel!svg-react!../../img/apple-logo.svg?name=AppleIcon');
let GoogleIcon = require('babel!svg-react!../../img/google-logo.svg?name=GoogleIcon');
let OutlookIcon = require('babel!svg-react!../../img/outlook-logo.svg?name=OutlookIcon');
let YahooIcon = require('babel!svg-react!../../img/yahoo-logo.svg?name=YahooIcon');
let FacebookIcon = require('babel!svg-react!../../img/facebook-icon.svg?name=FacebookIcon');
let TwitterIcon = require('babel!svg-react!../../img/twitter-icon.svg?name=TwitterIcon');
let LinkedinIcon = require('babel!svg-react!../../img/linkedin-icon.svg?name=LinkedinIcon');
let EmailIcon = require('babel!svg-react!../../img/email-icon.svg?name=EmailIcon');

const heroDetails = {
	title: "School of Management Networking Night", 
	primaryText: "Date: Aug. 7 at 9:00 PM, Boston, MA", 
	secondaryText: "Creator: Remy Carpinito",
};
const tags = [{key: 0, label: "Business"}, {key: 1, label: "Management"}, {key: 2, label: "Tech"}];
const attendees = [
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
];
const attendeeShowCount = 9;
const suggestedEvents = [
	{id: 0, name: "Spring Concert 2017", price: "FREE", maxPrice: "$20", image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F22442629%2F142826075701%2F1%2Foriginal.jpg?w=1000&rect=337%2C0%2C2700%2C1350&s=339ca32cec585e9c4956be2ecd4d1882", featured: true},
	{id: 1, name: "Dutch Heritage Celebration", price: "FREE", image: "https://cdn.evbuc.com/eventlogos/84605753/unknown328129.jpeg"},
	{id: 2, name: "Athletic Association Meetup", price: "FREE", maxPrice: "$45", image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F20662917%2F129313035959%2F1%2Foriginal.jpg?w=1000&rect=0%2C0%2C2160%2C1080&s=51f9d905db25aa4cb455fe4b5571f095"},
	{id: 3, name: "Spring Concert 2017", price: "FREE", maxPrice: "$20", image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F22442629%2F142826075701%2F1%2Foriginal.jpg?w=1000&rect=337%2C0%2C2700%2C1350&s=339ca32cec585e9c4956be2ecd4d1882", featured: true},
	{id: 4, name: "Dutch Heritage Celebration", price: "FREE", image: "https://cdn.evbuc.com/eventlogos/84605753/unknown328129.jpeg"},
	{id: 5, name: "Athletic Association Meetup", price: "FREE", maxPrice: "$45", image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F20662917%2F129313035959%2F1%2Foriginal.jpg?w=1000&rect=0%2C0%2C2160%2C1080&s=51f9d905db25aa4cb455fe4b5571f095"}
];

class Main extends Component {
	constructor(props, context){
		super(props, context);

		this.state = {
			registerDialogOpen: false,
			ticketCountValue: {ticket1: 0, ticket2: 0},
			tickets: [],
			eventSaved: false,
			snackbarOpen: false,
			calendarDialog: false,
			attendeesDialog: false,
			attendeesDialogUsers: attendees
		};
	}

	componentDidMount(){
		this.getInitialAttendeesState();
	}

	renderAttendees(count = false){
		let users = (count) ? attendees : this.state.attendeesDialogUsers;
		return users.map((tag, index) => {
			if(count && index >= count)
				return;
			return(
				<ListItem
					key={tag.id}
					primaryText={tag.name}
					secondaryText={tag.major+" "+tag.grad}
					leftAvatar={<Avatar src={tag.image} />}
					className="event-attendee" />
			);
		});
	}

	renderTags(){
		return tags.map((tag, index) => {
			return(
				<Chip
					key={tag.key}
					backgroundColor={"#EA7600"}
					labelColor={"#FFF"}
					style={{textTransform: 'uppercase', float: 'left', marginRight: "0.5rem", marginBottom: "1rem"}}
				>{tag.label}</Chip>
			);
		});
	}

	handleDialogClose(type){
		this.setState({[type]: false});
	}

	handleDialogOpen(type){
		this.setState({[type]: true});
	}

	isCheckoutDisabled(){
		return (this.state.tickets.length == 0) ? true : false;
	}

	handleTicketCountChange(ticketType, event, value){
		let ticketCount = this.state.ticketCountValue;
		ticketCount[ticketType] = value;
		this.setState({ticketCountValue: ticketCount});
		let tickets = this.state.tickets;
		tickets.push({type: ticketType, count: value});
		this.setState({tickets: tickets});
	}

	getTicketDropdown(ticket){
		return(
			<SelectField className="ticket-count-dropdown" value={this.state.ticketCountValue[ticket]} onChange={this.handleTicketCountChange.bind(this, ticket)}>
				<MenuItem value={0} primaryText="0" />
				<MenuItem value={1} primaryText="1" />
				<MenuItem value={2} primaryText="2" />
				<MenuItem value={3} primaryText="3" />
				<MenuItem value={4} primaryText="4" />
				<MenuItem value={5} primaryText="5" />
				<MenuItem value={6} primaryText="6" />
				<MenuItem value={7} primaryText="7" />
				<MenuItem value={8} primaryText="8" />
				<MenuItem value={9} primaryText="9" />
				<MenuItem value={10} primaryText="10" />
			</SelectField>
		);
	}

	renderBookmark(){
		if(this.state.eventSaved)
			return (<SavedIcon className="page-header--icon" onClick={this.handleSaveEvent.bind(this)}/>);
		else
			return(
				<SaveIcon className="page-header--icon" onClick={this.handleSaveEvent.bind(this)}/>);
	}

	handleSaveEvent(){
		this.setState({eventSaved: !this.state.eventSaved, snackbarOpen: true});
	}

	getInitialAttendeesState(){
		if(attendees == this.state.attendeesDialogUsers)
			return this.state.attendeesDialogUsers.sort(function(a,b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);});
		return attendees.sort(function(a,b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);});;
	}

	searchUsers(event){
		let searchValue = event.target.value;
		let users = (length >= searchValue.length) ? this.getInitialAttendeesState() : this.state.attendeesDialogUsers.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);});;
		length = searchValue.length;
		const result = users.filter(function(user, key) {
		    return user.name.toLowerCase().indexOf(searchValue) != -1;
		});
		this.setState({attendeesDialogUsers: result});
	}

	render() {
		return (
			<div>
				<Hero 
					image="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F21363263%2F170576045191%2F1%2Foriginal.jpg?w=1000&rect=0%2C578%2C5616%2C2808&s=1b98247e23d2a311eaac71c474d394b1"
					details={heroDetails} />
				<Card className="keep-center">
					<div className="content">
						<div className="page-header">
							<div className="page-header--icon-wrapper">
								{this.renderBookmark()}
								<Snackbar 
									open={this.state.snackbarOpen}
									message={(this.state.eventSaved) ? "Event saved" : "Event removed"}
									autoHideDuration={5000}
								/>
							</div>
							<div className="page-header--details-wrapper">
								<div className="page-header--details">
									<p className="event-price">FREE - $20</p>
									<div className="event-register-btn-wrapper">
										<button onClick={this.handleDialogOpen.bind(this, 'registerDialogOpen')} className="btn-rounded-secondary">Register</button>
									</div>
									<Dialog
										title="Register"
										modal={false}
										open={this.state.registerDialogOpen}
										actions={
											<div style={{overflow: "overlay"}}>
												<button onClick={this.handleDialogClose.bind(this)} className="btn-rounded-secondary" disabled={this.isCheckoutDisabled()}>
													Checkout
												</button>
											</div>
										}
										onRequestClose={this.handleDialogClose.bind(this, 'registerDialogOpen')}>
										<List>
											<ListItem
												primaryText="Ticket 1"
												secondaryText="Free"
												style={{borderLeft: "3px solid #CCC", marginBottom: "1rem"}}
												rightToggle={this.getTicketDropdown('ticket1')} />
											<ListItem
												primaryText="Ticket 2"
												secondaryText="$20"
												style={{borderLeft: "3px solid #CCC", marginBottom: "1rem"}}
												rightToggle={this.getTicketDropdown('ticket2')} />	
										</List>
									</Dialog>
								</div>
							</div>
						</div>
						<div className="page">
							<p className="page-label">About</p>
							<div className="page-content">
								<p>Knausgaard roof party lo-fi tilde lomo. Church-key offal flexitarian tote bag, cardigan gastropub echo park single-origin coffee fap gluten-free dreamcatcher gochujang. Celiac four loko cred cardigan cray direct trade. Venmo gluten-free art party hoodie, craft beer ramps crucifix tofu bespoke etsy tacos 90's master cleanse. Jean shorts +1 fap tumblr umami, slow-carb cray pickled bushwick ramps before they sold out iPhone vinyl.</p>
								<p>Tofu kombucha cardigan, migas before they sold out sustainable scenester asymmetrical. Health goth migas kale chips, hoodie 3 wolf moon man bun lo-fi squid irony yr occupy farm-to-table franzen. Single-origin coffee YOLO chia everyday carry, cold-pressed skateboard authentic gastropub schlitz ethical tacos bicycle rights polaroid green juice scenester. Williamsburg plaid fap, blog gluten-free selvage iPhone pinterest stumptown DIY kale chips 8-bit sriracha bushwick. Photo booth godard meditation green juice stumptown fanny pack brunch. Paleo umami shabby chic meh normcore, yuccie banh mi. +1 hammock everyday carry, put a bird on it fashion axe williamsburg plaid vinyl bushwick semiotics.</p>
							</div>
							<p className="page-label">When</p>
							<div className="page-content">
								<p>Friday, August 7th, 2016 at 9:00 PM (EST) - <a onClick={this.handleDialogOpen.bind(this, 'calendarDialog')}>Add Event to My Calendar</a></p>
								<Dialog
									title="Add to Calendar"
									modal={false}
									open={this.state.calendarDialog}
									onRequestClose={this.handleDialogClose.bind(this, 'calendarDialog')}>
									<List className="add-to-calendar">
										<ListItem
											primaryText="Apple Mail"
											leftIcon={<AppleIcon />}
											rightIcon={<RightArrowIcon />} />
										<ListItem
											primaryText="Google Mail"
											leftIcon={<GoogleIcon />}
											rightIcon={<RightArrowIcon />} />
										<ListItem
											primaryText="Yahoo Mail"
											leftIcon={<YahooIcon />}
											rightIcon={<RightArrowIcon />} />
										<ListItem
											primaryText="Outlook Mail"
											leftIcon={<OutlookIcon />}
											rightIcon={<RightArrowIcon />} />		
									</List>
								</Dialog>
							</div>
							<p className="page-label">Where</p>
							<div className="page-content">
								<p>CIC Boston Floor 15 - 50 Milk Street, Boston, MA 02110</p>
							</div>
							<p className="page-label">Tags</p>
							<div className="page-content">
								{this.renderTags()}
							</div>
							<p className="page-label">Social Share</p>
							<div className="social-wrapper">
								<button className="social-btn facebook">
									<FacebookIcon />
								</button>	
								<button className="social-btn twitter">
									<TwitterIcon />
								</button>	
								<button className="social-btn linkedin">
									<LinkedinIcon />
								</button>
								<button className="social-btn email">
									<EmailIcon />
								</button>
							</div>
							<hr />
							<div className="event-map-wrapper">
								<img width="655" src="http://maps.googleapis.com/maps/api/staticmap?center=Boston,+MA&zoom=13&scale=1&size=600x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xec7600%7Clabel:%7CBoston,+MA" alt="Google Map of Boston, MA" />
								<div className="event-venue">CIC Boston Floor 15</div>
								<div className="event-address">50 Milk Street, Boston, MA 02110</div>
								<div className="event-map-directions">
									<a className="event-direction-wrapper">
										<WalkIcon />
										Walk
									</a>
									<a className="event-direction-wrapper">
										<BikeIcon />
										Bike
									</a>
									<a className="event-direction-wrapper">
										<DriveIcon />
										Drive
									</a>
									<a className="event-direction-wrapper">
										<SubwayIcon />
										Subway
									</a>
								</div>
							</div>
							<hr />
							<p className="page-label">Attendees</p>
							<div className="page-content event-attendees-wrapper">
								<List className="attendees-preview" style={{overflow: "overlay"}}>
									{this.renderAttendees(attendeeShowCount)}
								</List>
								{(attendeeShowCount < Object.keys(attendees).length 
									&& <a onClick={this.handleDialogOpen.bind(this, 'attendeesDialog')} style={{margin: "1rem auto", width: "100%", display: "block", textAlign: "center"}}>See All Attendees</a>)}
								<Dialog
									title="All Attendees"
									modal={false}
									open={this.state.attendeesDialog}
									onRequestClose={this.handleDialogClose.bind(this, 'attendeesDialog')}>
									<TextField
										hintText="Search for attendees by name"
										fullWidth={true}
										onChange={(e) => this.searchUsers(e)}
										inputStyle={{color: "#555"}}
									/>
									<List className="attendees-dialog-wrapper">
										{this.renderAttendees()}
									</List>
								</Dialog>
							</div>
							<hr />
							<p className="page-label">Suggested Events</p>
							<div className="page-content suggested-events-wrapper">
								<GridList
									cols={2}
									cellHeight={200}
									padding={1}
								>
									{suggestedEvents.map((event) =>(
										<GridTile
											key={event.id}
											title={(event.maxPrice) ? (event.name+" ("+event.price+" - "+event.maxPrice+")") : (event.name+" ("+event.price+")")}
											titlePosition="top"
											titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
											cols={event.featured ? 2 : 1}
											rows={1}
										>
											<img style={{background: "url("+event.image+") no-repeat center/cover"}} />
										</GridTile>	
									))}
								</GridList>
							</div>
						</div>
					</div>
				</Card>
			</div>
		);
	}
}

export default Main;
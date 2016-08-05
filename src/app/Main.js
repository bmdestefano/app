import React, {Component} from 'react';
import { Link } from 'react-router'
import School from './models/School';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

require('./styles/import.scss');

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

class Main extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<AppBar 
						title={School.name}
						iconElementLeft={<Avatar src={School.logo} className="logo--header"/>}
						iconElementRight={
							<IconMenu
								iconButtonElement={
									<IconButton><MoreVertIcon /></IconButton>
								}
								targetOrigin={{horizontal: 'right', vertical: 'top'}}
								anchorOrigin={{horizontal: 'right', vertical: 'top'}}
								iconStyle={{fill: muiTheme.palette.accent1Color}}
								menuStyle={{backgroundColor: muiTheme.palette.accent1Color}}
							>
								<Link to="/profile"><MenuItem primaryText="Profile" className="text-white"/></Link>
								<Link to="/settings"><MenuItem primaryText="Settings" className="text-white"/></Link>
								<Link to="/"><MenuItem primaryText="Log out" className="text-white"/></Link>
							</IconMenu>
						}
					/>
					{this.props.children}
				</div>	
			</MuiThemeProvider>
		);
	}
}

export default Main;
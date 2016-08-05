import React, {Component} from 'react';
import { Link } from 'react-router'
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
		primary1Color: "#143A7B",
		accent1Color: "#FCB606",
		pickerHeaderColor: "#143A7B",
	},
	datePicker: {
		selectColor: "#143A7B",
	}
});

class Main extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<AppBar 
						title="Southern New Hampshire University"
						iconElementLeft={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU6xTuPALE2X4rM7vryx06LT0fl0IDJcjo853v0uUJEtCKgMNr4GdfnA" style={{marginLeft: "1rem", marginTop: "0.25rem"}}/>}
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
								<Link to="/profile"><MenuItem primaryText="Profile" style={{color: "#FFF"}}/></Link>
								<Link to="/settings"><MenuItem primaryText="Settings" style={{color: "#FFF"}}/></Link>
								<Link to="/"><MenuItem primaryText="Log out" style={{color: "#FFF"}}/></Link>
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
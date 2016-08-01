import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Profile from './components/pages/Profile';
import Event from './components/pages/Event';
require('./styles/import.scss');

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: "#00A9E0",
		accent1Color: "#EA7600",
		pickerHeaderColor: "#00A9E0",
	},
	datePicker: {
		selectColor: "#00A9E0",
	}
});

class Main extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<Router history={browserHistory}>
					<Route path="/" component={Profile} />
					<Route path="event" component={Event} />
				</Router>
			</MuiThemeProvider>
		);
	}
}

export default Main;
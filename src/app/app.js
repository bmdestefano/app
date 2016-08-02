import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';

import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';
import Event from './components/pages/Event';
import Main from './Main'; // Our custom react component

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<Route path="profile" component={Profile} />
			<Route path="settings" component={Settings} />
			<Route path="event" component={Event} />
		</Route>
	</Router>,
document.getElementById('app'));

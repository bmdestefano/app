import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';

import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';
import Event from './components/pages/Event';
import Main from './Main'; // Our custom react component
import Authentication from './components/Authentication';

injectTapEventPlugin();

render(
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<Route path="signup" component={Authentication} />
			<Route path="profile" component={Profile} />
			<Route path="settings" component={Settings} />
			<Route path="event" component={Event} />
		</Route>
	</Router>,
document.getElementById('app'));

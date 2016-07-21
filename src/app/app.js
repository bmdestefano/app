import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Authentication from './components/Authentication';
import Event from './components/pages/Event';

injectTapEventPlugin();

render((
	<Router history={browserHistory} >
		<Route path="/" component={Authentication} />
		<Route path="event" component={Event} />
	</Router>
), document.getElementById('app'));
import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'views/App';
import NotFound from 'views/NotFound';
import Main from 'views/Main';

const publicPath = '/';

export const routeCodes = {
	DASHBOARD: publicPath,
	ABOUT: `${ publicPath }about`
};

export default class Routes extends Component {
	render() {
		return (
			<Router history={ browserHistory }>
				<Route path={ publicPath } component={ App }>
					<IndexRoute component={ Main } />
					<Route path='*' component={ NotFound } />
				</Route>
			</Router>
		);
	}
}

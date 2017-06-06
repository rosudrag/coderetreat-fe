import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import Routes from 'routes';
import store from './store';

// Load SCSS
import '../scss/app.scss';

const renderDOM = () => {
	ReactDOM.render(
		<Provider store={ store }>
			<Routes />
		</Provider>,
		document.getElementById('root')
	);
};

renderDOM();


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'babel-polyfill';
import logger from 'dev/logger';
import rootReducer from 'reducers';

const isProduction = process.env.NODE_ENV === 'production';

const createMyStore = () => {
	let store = null;

	if (isProduction) {
		// In production adding only thunk middleware
		const middleware = applyMiddleware(thunk);

		store = createStore(
			rootReducer,
			middleware
		);
	} else {
		// In development mode beside thunk
		// logger and DevTools are added
		const middleware = applyMiddleware(thunk, logger);
		let enhancer;

		// Enable DevTools if browser extension is installed
		if (window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
			enhancer = compose(
				middleware,
				window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
			);
		} else {
			enhancer = compose(middleware);
		}


		store = createStore(
			rootReducer,
			enhancer
		);
	}

	return store;
};

let store = createMyStore();

export default store;


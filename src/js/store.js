import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'babel-polyfill';
import logger from 'dev/logger';
import rootReducer from 'reducers';

const isProduction = process.env.NODE_ENV === 'production';

const productionStore = () => {
	// In production adding only thunk middleware
	const middleware = applyMiddleware(thunk);

	return createStore(
		rootReducer,
		middleware
	);
};

const devStore = () => {
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


	return createStore(
		rootReducer,
		enhancer
	);
};

const createMyStore = () => {
	if (isProduction) {
		return productionStore();
	}
	return devStore();
};

let store = createMyStore();

export default store;


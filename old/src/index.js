/*
	external imports
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

/*
	internal imports
*/

import App from './components/App';
import appReducer from './redux/app';
import uiReducer from './redux/ui';
import fsReducer from './redux/fs';

/*
	store creation
*/

let store = createStore(combineReducers({
	ui: uiReducer,
	app: appReducer,
	fs: fsReducer,
	form: formReducer
}), applyMiddleware(thunk));

//store.subscribe(() =>	console.log(store.getState()));

/*
	App render
*/

const checkLogin = (nextState, replace) => {
// do nothing
}

ReactDOM.render(
  <Provider store={store}>
		<App />
  </Provider>,
  document.querySelectorAll('#rootElement')[0]
);

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

import Layout from './components/Layout';
import uiReducer from './redux/ui';
import appReducer from './redux/app';

/*
	store creation
*/

let store = createStore(combineReducers({
	ui: uiReducer,
	app: appReducer,
	form: formReducer
}), applyMiddleware(thunk));

store.subscribe(() =>	console.log(store.getState().app));

/*
	App render
*/

const checkLogin = (nextState, replace) => {
// do nothing
}

ReactDOM.render(
  <Provider store={store}>
		<Layout />
  </Provider>,
  document.querySelectorAll('#rootElement')[0]
);

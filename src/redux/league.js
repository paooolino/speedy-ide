/*
	external imports
*/

import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';

/*
	internal imports
*/

import { ENDPOINT_HOST, ENDPOINT_PATH } from '../../config';

/*
	action constants
*/

const FETCH_REQUEST = 'league/FETCH_REQUEST';
const FETCH_FAILURE = 'league/FETCH_FAILURE';
const FETCH_SUCCESS = 'league/FETCH_SUCCESS';

/*
	reducer
*/

const initialState = {
	league: {},
teams: []
};

export default (state=initialState, action) => {
	switch(action.type) {
		case FETCH_REQUEST:
			return Object.assign({}, state, {

			})

		case FETCH_FAILURE:
			return Object.assign({}, state, {

			})

		case FETCH_SUCCESS:
			return Object.assign({}, state, {
				league: action.json.league,
				teams: action.json.teams
			})

		default:
			return state;
	}
};

/*
	async action creators
*/


export const fetch_league = (id) => {
  // we return a thunk function, not an action object!
  // the thunk function needs to dispatch some actions to change the 
  // Store status, so it receives the "dispatch" function as its first parameter
  return (dispatch) => {
    // here starts the code that actually gets executed when the addTodo action 
    // creator is dispatched

    // first of all, let's do the optimistic UI update - we need to 
    // dispatch the old synchronous action object, using the renamed 
    // action creator
    dispatch(fetch_request());

    // now that the Store has been notified of the new todo item, we 
    // should also notify our server - we'll use here ES6 fetch function 
    // to post the data
		const body_request = {id};
		body_request.action = FETCH_REQUEST;
    return fetch(ENDPOINT_HOST + ENDPOINT_PATH, {
				method: 'post',
				body: JSON.stringify(body_request)
			})
			.then(response => response.json())
			.then(json => {
				dispatch(fetch_success(json));
				
			})
			.catch(err => {
				// Error: handle it the way you like, undoing the optimistic update,
				//  showing a "out of sync" message, etc.
				dispatch(fetch_failure(err.message));
			});
			
		/*	
    return fetch(ENDPOINT_HOST + ENDPOINT_PATH, {
      method: 'post',
      body: JSON.stringify(body_request)
    }).then(response => {
      // you should probably get a real id for your new todo item here, 
      // and update your store, but we'll leave that to you
			if(!response.ok) {
				dispatch(fetch_failure(response.status + ' - ' + response.statusText));
			} else {
				dispatch(fetch_success(response.json()));
				
			}
    }).catch(err => {
			// Error: handle it the way you like, undoing the optimistic update,
			//  showing a "out of sync" message, etc.
			dispatch(fetch_failure(err.message));
    });
		*/
  }
}


/*
	sync action creators
*/

export const fetch_request = () => ({
	type: FETCH_REQUEST
})


export const fetch_failure = () => ({
	type: FETCH_FAILURE
})


export const fetch_success = (json) => ({
	type: FETCH_SUCCESS,
	json
})


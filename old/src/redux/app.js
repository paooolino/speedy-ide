/*
	external imports
*/

/*
	internal imports
*/

/*
	action constants
*/

const LOADCONFIG_R = 'fs/LOADCONFIG_R';
const LOADCONFIG_F = 'fs/LOADCONFIG_F';
const LOADCONFIG_S = 'fs/LOADCONFIG_S';

/*
	reducer
*/

const initialState = {
	config: null
};

export default (state=initialState, action) => {
	switch(action.type) {
		case LOADCONFIG_R:
			return Object.assign({}, state, {

			})

		case LOADCONFIG_F:
			return Object.assign({}, state, {

			})

		case LOADCONFIG_S:
			return Object.assign({}, state, {
				config: action.json
			})
		
		default:
			return state;
	}
};

/*
	async action creators
*/

export const loadconfig = () => {
	return (dispatch) => {
		dispatch(loadconfig_r());

		return fetch('config.json', {
			method: 'get'
		})
		.then(response => response.json())
		.then(json => {
			dispatch(loadconfig_s(json));
		})
		.catch(err => {
			dispatch(loadconfig_f(err.message));
		});
	}
}

/*
	sync action creators
*/

export const loadconfig_r = () => ({
	type: LOADCONFIG_R
})


export const loadconfig_f = () => ({
	type: LOADCONFIG_F
})


export const loadconfig_s = (json) => ({
	type: LOADCONFIG_S,
	json
})

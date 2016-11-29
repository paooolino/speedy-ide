/*
	external imports
*/

/*
	internal imports
*/

/*
	action constants
*/

const FETCHDIR_REQUEST = 'fs/FETCHDIR_REQUEST';
const FETCHDIR_FAILURE = 'fs/FETCHDIR_FAILURE';
const FETCHDIR_SUCCESS = 'fs/FETCHDIR_SUCCESS';

/*
	reducer
*/

const initialState = {
	entries: []
};

export default (state=initialState, action) => {
	switch(action.type) {
		case FETCHDIR_REQUEST:
			return Object.assign({}, state, {

			})

		case FETCHDIR_FAILURE:
			return Object.assign({}, state, {

			})

		case FETCHDIR_SUCCESS:
			return Object.assign({}, state, {
				entries: action.json.entries
			})
		
		default:
			return state;
	}
};

/*
	async action creators
*/

export const fetchdir = (server_path, source_dir) => {
	return (dispatch) => {
		dispatch(fetchdir_request());
		
		const body_request = {
			action: 'fetchdir',
			source_dir
		};
		return fetch(server_path, {
			method: 'post',
			body: JSON.stringify(body_request)
		})
		.then(response => response.json())
		.then(json => {
			dispatch(fetchdir_success(json));
		})
		.catch(err => {
			dispatch(fetchdir_failure(err.message));
		});
	}
}

/*
	sync action creators
*/

export const fetchdir_request = () => ({
	type: FETCHDIR_REQUEST
})


export const fetchdir_failure = () => ({
	type: FETCHDIR_FAILURE
})


export const fetchdir_success = (json) => ({
	type: FETCHDIR_SUCCESS,
	json
})

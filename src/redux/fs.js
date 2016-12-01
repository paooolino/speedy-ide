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
	helper functions
*/

/**
	Pure function to add UI fields to the JSON tree.
	@param json_tree as an array of entries.
	@return a new json tree with the UI fields added.
*/
const addUIFields = (json_tree, id) => {
	return [...json_tree.map((entry, index) => {
		const next_id = (id||0) + '' + index;
		return Object.assign(
			{},
			entry,
			{selected: false, expanded: false, id: next_id},
			(entry.children ? {children: addUIFields(entry.children, next_id)} : {})
		);
	})];
}

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
				entries: action.json
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
			dispatch(fetchdir_success(addUIFields(json)));
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

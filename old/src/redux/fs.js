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
const SELECT_ENTRY = 'fs/SELECT_ENTRY';
const LOADFILE_R = 'fs/LOADFILE_R';
const LOADFILE_F = 'fs/LOADFILE_F';
const LOADFILE_S = 'fs/LOADFILE_S';
const SAVEFILE_R = 'fs/SAVEFILE_R';
const SAVEFILE_F = 'fs/SAVEFILE_F';
const SAVEFILE_S = 'fs/SAVEFILE_S';

/*
	helper functions
*/

/**
	Pure function to add UI fields to the JSON tree.
	@param json_tree as an array of entries.
	@return a new json tree with the UI fields added.
*/

/*
const addUIFields = (json_tree, id) => {
	return [...json_tree.map((entry, index) => {
		const next_id = (id||0) + '' + index;
		return Object.assign(
			{},
			entry,
			{expanded: false, id: next_id},
			(entry.children ? {children: addUIFields(entry.children, next_id)} : {})
		);
	})];
}
*/

/*
	reducer
*/

const initialState = {
	entries: [],
	selectedEntry: {},
	loadedFileContent: ''
};

export default (state=initialState, action) => {
	switch(action.type) {
		case FETCHDIR_REQUEST:
			return Object.assign({}, state, {
				// to do
			})

		case FETCHDIR_FAILURE:
			return Object.assign({}, state, {
				// to do
			})

		case FETCHDIR_SUCCESS:
			return Object.assign({}, state, {
				entries: action.json
			})
		
		case SELECT_ENTRY:
			return Object.assign({}, state, {
				selectedEntry: {
					id: action.entry.id,
					hasChildren: !!action.entry.children,
					filepath: action.entry.filepath,
					children: action.entry.children ? [...action.entry.children] : []
				}
			})
			
		case LOADFILE_R:
			return Object.assign({}, state, {
				// to do
			})

		case LOADFILE_F:
			return Object.assign({}, state, {
				// to do
			})

		case LOADFILE_S:
			return Object.assign({}, state, {
				loadedFileContent: action.json.content
			})
			
		case SAVEFILE_R:
			return Object.assign({}, state, {
				// to do
			})

		case SAVEFILE_F:
			return Object.assign({}, state, {
				// to do
			})

		case SAVEFILE_S:
			return Object.assign({}, state, {
				// to do
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

export const loadfile = (server_path, filepath) => {
	return (dispatch) => {
		dispatch(loadfile_r());
		
		const body_request = {
			action: 'loadfile',
			filepath
		};
		return fetch(server_path, {
			method: 'post',
			body: JSON.stringify(body_request)
		})
		.then(response => response.json())
		.then(json => {
			dispatch(loadfile_s(json));
		})
		.catch(err => {
			dispatch(loadfile_f(err.message));
		});
	}
}

export const savefile = (newValue, server_path, filepath) => {
	return (dispatch) => {
		dispatch(savefile_r());
		
		const body_request = {
			action: 'savefile',
			newValue,
			filepath
		};
		return fetch(server_path, {
			method: 'post',
			body: JSON.stringify(body_request)
		})
		.then(response => response.json())
		.then(json => {
			dispatch(savefile_s(json));
		})
		.catch(err => {
			dispatch(savefile_f(err.message));
		});
	}
}


/*
	sync action creators
*/

export const fetchdir_request = () => ({
	type: FETCHDIR_REQUEST
});

export const fetchdir_failure = () => ({
	type: FETCHDIR_FAILURE
});

export const fetchdir_success = (json) => ({
	type: FETCHDIR_SUCCESS,
	json
});

export const select_entry = (entry) => ({
	type: SELECT_ENTRY,
	entry
});

export const loadfile_r = () => ({
	type: LOADFILE_R
});

export const loadfile_f = () => ({
	type: LOADFILE_F
});

export const loadfile_s = (json) => ({
	type: LOADFILE_S,
	json
});

export const savefile_r = () => ({
	type: SAVEFILE_R
});

export const savefile_f = () => ({
	type: SAVEFILE_F
});

export const savefile_s = (json) => ({
	type: SAVEFILE_S,
	json
});



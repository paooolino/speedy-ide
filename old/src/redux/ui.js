/*
	external imports
*/

/*
	internal imports
*/

/*
	action constants
*/

const SET_HANDLER_POS = 'ui/SET_HANDLER_POS';
const BEGIN_DRAG = 'ui/BEGIN_DRAG';
const END_DRAG = 'ui/END_DRAG';

/*
	reducer
*/

const initialState = {
	isDragging: false,
	handlerPos: 20
};

export default (state=initialState, action) => {
	switch(action.type) {
		case SET_HANDLER_POS:
			return Object.assign({}, state, {
				handlerPos: action.handlerPos
			});
			break;
			
		case BEGIN_DRAG:
			return Object.assign({}, state, {
				isDragging: true
			});
			break;

		case END_DRAG:
			return Object.assign({}, state, {
				isDragging: false
			});
			break;
		
		default:
			return state;
	}
};

/*
	async action creators
*/

/*
	sync action creators
*/

export const set_handler_pos = (handlerPos) => ({
	type: SET_HANDLER_POS,
	handlerPos
});

export const begin_drag = () => ({
	type: BEGIN_DRAG
});

export const end_drag = () => ({
	type: END_DRAG
});

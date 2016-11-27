/*
	external imports
*/

/*
	internal imports
*/

/*
	action constants
*/

const RESIZE_LAYOUT = 'ui/RESIZE_LAYOUT';

/*
	reducer
*/

const initialState = {
	headerHeight: 0,
	contentHeight: 0,
	leftWidth: 0,
	rightWidth: 0
};

export default (state=initialState, action) => {
	switch(action.type) {
		case RESIZE_LAYOUT:
			return Object.assign({}, state, {
				headerHeight: action.headerHeight,
				contentHeight: action.contentHeight,
				leftWidth: action.leftWidth,
				rightWidth: action.rightWidth
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

export const resize_layout = (headerHeight, contentHeight, leftWidth, rightWidth) => ({
	type: RESIZE_LAYOUT,
	headerHeight,
	contentHeight,
	leftWidth,
	rightWidth
});

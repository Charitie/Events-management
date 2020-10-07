import {
	OPEN_EDIT_MODAL,
	OPEN_DELETE_MODAL,
	CLOSE_MODAL,
} from "../actions/types";

const initialState = {
	openEdit: false,
	openDelete: false
};
export default function (state = initialState, action) {
	switch (action.type) {
		case OPEN_EDIT_MODAL:
			return { ...state, openEdit: true };
		case OPEN_DELETE_MODAL:
			return { ...state, openDelete: true };
		case CLOSE_MODAL:
			return { ...state, openEdit: false, openDelete: false };
		default:
			return state;
	}
}

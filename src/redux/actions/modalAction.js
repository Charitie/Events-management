import { OPEN_EDIT_MODAL, OPEN_DELETE_MODAL, CLOSE_MODAL } from "./types";

export const modalEditOpened = (open) => ({
	type: OPEN_EDIT_MODAL,
	payload: open,
});

export const deleteModalOpened = (open) => ({
	type: OPEN_DELETE_MODAL,
	payload: open,
});

export const modalClosed = (open) => ({
	type: CLOSE_MODAL,
	payload: open,
});

export const openEditModal = () => (dispatch) =>
	dispatch(modalEditOpened({ open: true }));

export const openDeleteModal = () => (dispatch) =>
	dispatch(deleteModalOpened({ open: true }));

export const closeModal = () => (dispatch) =>
	dispatch(modalClosed({ open: false }));

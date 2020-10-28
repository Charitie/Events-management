import React from "react";
import Backdrop from "../../../components/backdrop/Backdrop";

const DeleteEventModal = ({ closeModal, deleteEvent }) => {
	return (
		<>
			<Backdrop />
			<div className='form-modal form-modal--delete'>
				<h2 className='form-modal__header form-modal__header--delete'>
					Confirm you want to delete this event?
				</h2>
				<div className='control-buttons'>
					<button className='btn btn--cancel' onClick={closeModal}>
						cancel
					</button>
					<button className='btn btn--delete' onClick={deleteEvent}>
						delete
					</button>
				</div>
			</div>
		</>
	);
};

export default DeleteEventModal;

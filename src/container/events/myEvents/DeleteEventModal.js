import React from "react";
import Backdrop from "../../../components/backdrop/Backdrop";

const DeleteEventModal = ({closeModal, deleteEvent}) => {
	return (
		<>
			<Backdrop />
			<div className='form-modal' style={{padding:16, color: "white", height: "200px" }}>
				<h2>Confirm you want to delete this event?</h2>
        <button onClick={closeModal}>cancel</button>
        <button onClick={deleteEvent}>delete</button>
			</div>
		</>
	);
};

export default DeleteEventModal;

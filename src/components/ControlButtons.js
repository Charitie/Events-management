import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelRsvp, rsvp } from "../redux/actions/eventsActions";

const ControlButtons = ({
	showButtons,
	toggleEditModal,
	toggleDeleteModal,
	event,
	showRsvpButton,
}) => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const { user } = auth;

	return (
		<>
			<div className={` ${showButtons} content__control-buttons`}>
				<span className='content__control-button content__control-button--guest'>
					Guest
				</span>
				<span
					onClick={() => toggleEditModal(event)}
					className='content__control-button content__control-button--edit'>
					Edit
				</span>
				<span
					onClick={() => toggleDeleteModal(event.id)}
					className='content__control-button content__control-button--delete'>
					Delete
				</span>
			</div>

			{event.guests && event.guests.includes(user.id) ? (
				<button
					className={`${showRsvpButton} content__control-button content__control-button--rsvp`}
					onClick={() => dispatch(cancelRsvp(event.id))}>
					Cancel
				</button>
			) : (
				<button
					className={`${showRsvpButton} content__control-button content__control-button--rsvp`}
					onClick={() => dispatch(rsvp(event.id))}>
					RSVP
				</button>
			)}
		</>
	);
};

export default ControlButtons;

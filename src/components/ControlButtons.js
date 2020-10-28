import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelRsvp, rsvp } from "../redux/actions/eventsActions";
import GuestEventModal from "../container/events/myEvents/GuestEventModal";
import Backdrop from "./backdrop/Backdrop";

const ControlButtons = ({
	showButtons,
	toggleEditModal,
	toggleDeleteModal,
	event,
	showRsvpButton,
}) => {
	const [openGuestModal, setOpenGuestModal] = useState(false);
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const { user } = auth;

	const toggleCloseGuestModal = () => {
		setOpenGuestModal(false);
	};

	return (
		<>
			{openGuestModal ? (
				<>
					<Backdrop />
					<GuestEventModal
						guests={event.guests}
						toggleCloseGuestModal={toggleCloseGuestModal}
					/>
				</>
			) : (
				""
			)}
			<div className={` ${showButtons} content__control-buttons`}>
				<span
					onClick={() => setOpenGuestModal(true)}
					className='content__control-button content__control-button--guest'>
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
			{event.createdBy === user.id ? (
				<button
					className={`${showRsvpButton} content__control-button content__control-button--rsvp content__control-button--host`}>
					Event Host
				</button>
			) : event.guests && event.guests.includes(user.id) ? (
				<button
					className={`${showRsvpButton} content__control-button content__control-button--rsvp`}
					onClick={() => dispatch(cancelRsvp(event.id, user.id))}>
					Cancel
				</button>
			) : (
				<button
					className={`${showRsvpButton} content__control-button content__control-button--rsvp`}
					onClick={() => dispatch(rsvp(event.id, user.id))}>
					RSVP
				</button>
			)}
		</>
	);
};

export default ControlButtons;

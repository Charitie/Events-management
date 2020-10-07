import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MyEvents.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
	editMyEvent,
	eventDeleted,
	fetchMyEvents,
} from "../../../redux/actions/eventsActions";
import Modal from "../../../components/backdrop/Backdrop";
import EventForm from "../../../components/eventForm/EventForm";
import Backdrop from "../../../components/backdrop/Backdrop";
import { ReactComponent as CancelButton } from "../../../images/cancel-circle.svg";
import EventCard from "../../../components/eventCard/EventCard";

const MyEvents = () => {
	const [formData, setFormData] = useState({
		id: "",
		name: "",
		category: "",
		location: "",
		description: "",
	});
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState(new Date());
	const [openEditModal, setEditOpenModal] = useState(false);
	const [openDeleteModal, setDeleteOpenModal] = useState(false);

	const myEvent = useSelector((state) => state.events);
	const { myEvents, events, event, error, loading } = myEvent;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMyEvents());
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	
	};

	const handleDateChange = (date) => {
		setDate(date);
	};

	const handleTimeChange = (time) => {
		setTime(time);
	};

	const handleSubmit = (event) => {
		event.preventDefault()
		const eventDetails = {
			...formData,
			date,
			time: new Date(time).toTimeString().split(" ")[0],
		};
		console.log('e details', eventDetails)
		dispatch(editMyEvent(eventDetails.id, eventDetails));
	};

	const toggleEditModal = (event) => {
		console.log("event in modal", event);
		setFormData(event)
		setEditOpenModal(!openEditModal);
	};

	const toggleDeleteModal = () => {
		setDeleteOpenModal(!openDeleteModal);
	};

	return (
		<div className='main-content'>
			{openDeleteModal ? (
				<>
					<Backdrop />
					<div className='form-modal'>
						<div style={{ background: "yellow" }}>
							<h2>Are sure you want to delete this event?</h2>
							<button onClick={() => setDeleteOpenModal(false)}>cancel</button>
							<button onClick={() => dispatch(eventDeleted())}>delete</button>
						</div>
					</div>
				</>
			) : null}
			{openEditModal ? (
				<>
					<Backdrop />
					<div className='form-modal'>
						<div className='form-modal__header'>
							<h2 className='form-modal__title'>Edit Event</h2>
							<CancelButton
								onClick={() => setEditOpenModal(false)}
								className='form-modal__cancel-btn'
							/>
						</div>
						<EventForm
							date={date}
							time={time}
							formData = { formData}
							handleChange={handleChange}
							handleTimeChange={handleTimeChange}
							handleDateChange={handleDateChange}
							handleSubmit={handleSubmit}
							buttonText='Update'
							buttonClassName='btn--white'
						/>
					</div>
				</>
			) : null}
			<EventCard
				showRsvpButton='content__hide-rsvp-btn'
				events={myEvents}
				toggleEditModal={toggleEditModal}
				toggleDeleteModal={toggleDeleteModal}
			/>
		</div>
	);
};

MyEvents.propTypes = {
	events: PropTypes.object,
	getMyEvents: PropTypes.func,
	editMyEvent: PropTypes.func,
};

export default MyEvents;

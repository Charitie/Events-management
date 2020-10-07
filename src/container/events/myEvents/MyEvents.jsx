import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MyEvents.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
	editMyEvent,
	deleteEvent,
	fetchMyEvents,
} from "../../../redux/actions/eventsActions";
import EventForm from "../../../components/eventForm/EventForm";
import EventCard from "../../../components/eventCard/EventCard";
import {
	closeModal,
	openEditModal,
	openDeleteModal,
} from "../../../redux/actions/modalAction";
import DeleteEventModal from "./DeleteEventModal";
import EditEventModal from "./EditEventModal";

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
	const [eventId, setEventId] = useState("");
	const myEvent = useSelector((state) => state.events);
	const modal = useSelector((state) => state.modal);

	const { myEvents, loading } = myEvent;
	const { openEdit, openDelete } = modal;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMyEvents());
	}, [dispatch]);

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
		event.preventDefault();
		const eventDetails = {
			...formData,
			date,
			time: new Date(time).toTimeString().split(" ")[0],
		};
		dispatch(editMyEvent(eventDetails.id, eventDetails));
	};

	const toggleEditModal = (event) => {
		setFormData(event);
		dispatch(openEditModal());
	};

	const toggleDeleteModal = (id) => {
		setEventId(id);
		dispatch(openDeleteModal());
	};

	return (
		<>
			<div className='main-content'>
				<EventCard
					showRsvpButton='content__hide-rsvp-btn'
					events={myEvents}
					loading={loading}
					toggleEditModal={toggleEditModal}
					toggleDeleteModal={toggleDeleteModal}
				/>

				{openEdit ? (
					<EditEventModal
						date={date}
						time={time}
						formData={formData}
						handleChange={handleChange}
						handleTimeChange={handleTimeChange}
						handleDateChange={handleDateChange}
						handleSubmit={handleSubmit}
						toggleEditModal={toggleEditModal}
						closeModal={() => dispatch(closeModal())}
					/>
				) : null}

				{openDelete ? (
					<DeleteEventModal
						closeModal={() => dispatch(closeModal())}
						deleteEvent={() => dispatch(deleteEvent(eventId))}
					/>
				) : null}
			</div>
			)
		</>
	);
};

MyEvents.propTypes = {
	events: PropTypes.object,
	getMyEvents: PropTypes.func,
	editMyEvent: PropTypes.func,
};

export default MyEvents;

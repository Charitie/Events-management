import React, { useState } from "react";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import "./CreateEvents.scss";
import { createEvent } from "../../../redux/actions/eventsActions";
import EventForm from "../../../components/eventForm/EventForm";

const CreateEvents = (props) => {
	const [formData, setFormData] = useState({
		name: "",
		category: "",
		location: "",
		description: "",
	});
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState(new Date());
	// const events = useSelector((state) => state.events);
	// const { loading, error, event } = events;
	const dispatch = useDispatch();

	const { name, category, location, description } = formData;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleDateChange = (date) => {
		setDate(date)
	}

	const handleTimeChange = (date) => {
		setTime(time)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const eventDetails = {
			name,
			category,
			location,
			description,
			date,
			time: new Date(time).toTimeString().split(" ")[0],
		};
		dispatch(createEvent(eventDetails));
	};

	// if (!error) {
	// 	props.history.push("/events/my-events");
	// }


	return (
		<div className='container'>
			<h1 className='title'>Create An Event</h1>
			<EventForm
				formData={formData}
				date={date}
				time={time}
				handleChange={handleChange}
				handleTimeChange={handleTimeChange}
				handleDateChange={handleDateChange}
				handleSubmit={handleSubmit}
				buttonText='Create Event'
				buttonClassName='btn--gold'
			/>
		</div>
	);
};

CreateEvents.propTypes = {
	createEvent: PropTypes.func,
	event: PropTypes.object,
};

export default CreateEvents;

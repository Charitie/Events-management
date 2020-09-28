import React, { useState } from "react";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import "./CreateEvents.scss";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../../../redux/actions/eventsActions";

const CreateEvents = (props) => {
	const [formData, setFormData] = useState({
		name: "",
		category: "",
		location: "",
		description: "",
		// date: new Date(),
	});
	const [date, setDate] = useState(new Date());
	const events = useSelector((state) => state.events);
	const { loading, error, event } = events;
	const dispatch = useDispatch();

	const { name, category, location, description } = formData;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createEvent(name, category, location, description, date));
	};

	console.log("event", event);
	// console.log("data", formData);
	// console.log("date", date);

	return (
		<div className='container'>
			<h1 className='title'>Create An Event</h1>
			<form onSubmit={handleSubmit} className='form'>
				<div className='form-group'>
					<label className='form-group__label' htmlFor='name'>
						Name:
					</label>
					<input
						className='form-group__input'
						type='text'
						name='name'
						id='name'
						value={name}
						onChange={handleChange}
						// placeholder='Event name'
					/>
				</div>

				<div className='form-group'>
					<label className='form-group__label' htmlFor='category'>
						Category:
					</label>
					<input
						className='form-group__input'
						type='text'
						name='category'
						id='category'
						value={category}
						onChange={handleChange}

						// placeholder='Event category'
					/>
				</div>
				<div className='form-group'>
					<label className='form-group__label' htmlFor='location'>
						Location:
					</label>
					<input
						className='form-group__input'
						type='text'
						name='location'
						id='location'
						value={location}
						onChange={handleChange}

						// placeholder='Event location'
					/>
				</div>
				<div className='form-group'>
					<label className='form-group__label' htmlFor='description'>
						Description:
					</label>
					<textarea
						className='form-group__textarea'
						name='description'
						id='description'
						value={description}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<label className='form-group__label' htmlFor='date'>
						date:
					</label>
					<DatePicker
						className='form-group__date-picker'
						peekNextMonth
						showMonthDropdown
						showYearDropdown
						dropdownMode='select'
						showTimeSelect
						dateFormat='MMMM d, yyyy h:mm aa'
						selected={date}
						onChange={(date) => setDate(date)}
					/>
				</div>
				<button type='submit' className='btn btn-gold'>
					Create Event
				</button>
			</form>
		</div>
	);
};

CreateEvents.propTypes = {
	createEvent: PropTypes.func,
	event: PropTypes.object,
};

export default CreateEvents;

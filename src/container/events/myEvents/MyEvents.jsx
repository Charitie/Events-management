import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MyEvents.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { editMyEvent, getMyEvents } from "../../../redux/actions/eventsActions";
import Modal from "../../../components/backdrop/Backdrop";
import EventForm from "../../../components/eventForm/EventForm";
import Backdrop from "../../../components/backdrop/Backdrop";
import { ReactComponent as CancelButton } from "../../../images/cancel-circle.svg";

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
	const [openModal, setOpenModal] = useState(false);
	const myEvent = useSelector((state) => state.events);
	const { events, error, loading } = myEvent;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMyEvents());
		// dispatch(editMyEvent(event))
		setFormData({
			...formData,
			id: events.id,
			name: events.name,
			category: events.category,
			description: events.description,
			location: events.location,
		});
		// setTime({ time: event.time });
		// setDate({ date: event.date });
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

	const handleSubmit = () => {
		const eventDetails = {
			...formData,
			date,
			time: new Date(time).toTimeString().split(" ")[0],
		};
		dispatch(editMyEvent(eventDetails));
	};

	const toggleModal = () => {
		setOpenModal(!openModal);
	};

	return (
		<div className='main-content'>
			{openModal ? (
				<>
					<Backdrop />
					<div className='form-modal'>
						<div className='form-modal__header'>
							<h2 className='form-modal__title'>Edit Event</h2>
							<CancelButton
								onClick={() => setOpenModal(false)}
								className='form-modal__cancel-btn'
							/>
						</div>
						<EventForm
							date={date}
							time={time}
							formData={formData}
							handleChange={handleChange}
							handleTimeChange={handleTimeChange}
							handleDateChange={handleDateChange}
							handleSubmit={handleSubmit}
							buttonText='Edit'
							buttonClassName='btn--white'
						/>
					</div>
				</>
			) : (
				<h1>null</h1>
			)}
			<div className='events'>
				{events.length > 0 &&
					events.map((event) => {
						return (
							<div key={event.id} className='event'>
								<div className='title'>{event.name}</div>
								<div className='content'>
									<ul>
										<li>
											<span className='content__keys'> Location :</span>
											{event.location}
										</li>
										<li>
											<span className='content__keys'>Category :</span>
											{event.category}
										</li>
										<li>
											<span className='content__keys'> Date: </span>
											{new Date(event.date).toDateString()}
										</li>
										<li>
											<span className='content__keys'> Time: </span>
											{event.time}
										</li>
										<li>
											<span className='content__keys'>Description :</span>
											{event.description}
										</li>
									</ul>
									<div className='content__control-buttons'>
										<span className='content__control-button content__control-button--guest'>
											Guest
										</span>
										<span
											onClick={toggleModal}
											className='content__control-button content__control-button--edit'>
											Edit
										</span>
										<span className='content__control-button content__control-button--delete'>
											Delete
										</span>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

MyEvents.propTypes = {
	events: PropTypes.object,
	getMyEvents: PropTypes.func,
	editMyEvent: PropTypes.func,
};

export default MyEvents;

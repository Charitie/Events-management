import React from "react";
import Backdrop from "../../../components/backdrop/Backdrop";
import { ReactComponent as CancelButton } from "../../../images/cancel-circle.svg";
import EventForm from "../../../components/eventForm/EventForm";

const EditEventModal = ({
	closeModal,
	formData,
	date,
	time,
	handleSubmit,
	handleChange,
	handleTimeChange,
	handleDateChange,
}) => {

	return (
		<>
			<Backdrop />
			<div className='form-modal'>
				<div className='form-modal__header'>
					<h2 className='form-modal__title'>Edit Event</h2>
					<CancelButton
						onClick={closeModal}
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
					buttonText='Update'
					buttonClassName='btn--white'
				/>
			</div>
		</>
	);
};

export default EditEventModal;

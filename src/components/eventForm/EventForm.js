import React from "react";
// import PropTypes from "prop-types";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "./EventForm.scss";

const EventForm = ({
	formData: { name, category, location, description },
	date,
	time,
	handleSubmit,
	handleChange,
	handleTimeChange,
	handleDateChange,
	buttonText,
	buttonClassName,
}) => {
	const MyContainer = ({ className, children }) => {
		return (
			<CalendarContainer className={className}>
				<div style={{ position: "relative", fontSize: 10 }}>{children}</div>
			</CalendarContainer>
		);
	};

	return (
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
					required
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
					required
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
					required
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
					required
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
					dateFormat='yyyy/MM/dd'
					isClearable
					minDate={new Date()}
					calendarContainer={MyContainer}
					selected={date}
					onChange={handleDateChange}
					required
				/>
			</div>
			<div className='form-group'>
				<label className='form-group__label' htmlFor='date'>
					time:
				</label>
				<DatePicker
					className='form-group__date-picker'
					showTimeSelect
					showTimeSelectOnly
					timeIntervals={15}
					timeCaption='Time'
					dateFormat='HH:mm aa'
					isClearable
					selected={time}
					onChange={handleTimeChange}
					required
				/>
			</div>

			<button type='submit' className={`btn ${buttonClassName}`}>
				{buttonText}
			</button>
		</form>
	);
};

export default EventForm;

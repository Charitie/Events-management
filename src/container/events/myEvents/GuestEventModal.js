import React from "react";
import { ReactComponent as CancelButton } from "../../../images/cancel-circle.svg";

const GuestEventModal = ({ guests, toggleCloseGuestModal }) => {
	console.log(guests);
	return (
		<div className='guest-modal'>
			<div className='header-section'>
				<h2 className='title'>Guests</h2>
				<CancelButton
					onClick={toggleCloseGuestModal}
					className='form-modal__cancel-btn'
				/>
			</div>
			{guests.length ? (
				<ol className='guest-list'>
					{guests.map((guest, index) => {
						return (
							<li key={index}>
								<span>
									<b>Name:</b>&nbsp; {guest.name}
								</span>
								<span>
									<b>Phone:</b>&nbsp; {guest.phone}
								</span>
							</li>
						);
					})}
				</ol>
			) : (
				<h3>No guest yet on this event</h3>
			)}
		</div>
	);
};

export default GuestEventModal;

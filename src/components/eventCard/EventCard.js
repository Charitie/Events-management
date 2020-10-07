import React from "react";

const EventCard = ({
	events,
	toggleEditModal,
	toggleDeleteModal,
	showButtons,
	showRsvpButton,
	deleteEvent,
}) => {
	return (
		<div className='events'>
			{events.length > 0 &&
				events.map((event) => {
					return (
						<div key={event.id} className='event'>
							<div className='title'>{event.name}</div>
							<div className='content'>
								<ul>
									<li>
										<span className='content__keys'> Name :</span>
										{event.name}
									</li>
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
										onClick={toggleDeleteModal}
										className='content__control-button content__control-button--delete'>
										Delete
									</span>
								</div>
								<button
									className={`${showRsvpButton} content__control-button content__control-button--rsvp`}>
									RSVP
								</button>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default EventCard;

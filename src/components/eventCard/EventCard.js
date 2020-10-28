import React from "react";
import loader from "../../images/loader.gif";
import ControlButtons from "../ControlButtons";

const EventCard = ({
	events,
	toggleEditModal,
	toggleDeleteModal,
	showButtons,
	showRsvpButton,
	loading,
}) => {
	return (
		<div className='events'>
			{loading ? (
				<img src={loader} alt='loader' />
			) : (
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
								<ControlButtons
									toggleDeleteModal={toggleDeleteModal}
									toggleEditModal={toggleEditModal}
									event={event}
									showButtons={showButtons}
									showRsvpButton={showRsvpButton}
								/>
							</div>
						</div>
					);
				})
			)}
		</div>
	);
};

export default EventCard;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "../../components/eventCard/EventCard";
import { ReactComponent as SearchIcon } from "../../images/magnifying-glass.svg";
import {  fetchEvents } from "../../redux/actions/eventsActions";

import "./Events.scss";

const AllEvents = () => {
	const event = useSelector((state) => state.events);
	const { events } = event;
	const dispatch = useDispatch();

	console.log(events);
	useEffect(() => {
		dispatch(fetchEvents());
	}, []);

	return (
		<div className='events-container'>
			<div className='main-content'>
				<div className='search'>
					<input
						className='search__input'
						type='text'
						placeholder='Search...'
					/>
					<button className='search__button'>
						<SearchIcon className='search__icon' />
					</button>
				</div>

				<EventCard
					showButtons='content__hide-control-buttons'
					events={events}
				/>
			</div>
		</div>
	);
};

export default AllEvents;

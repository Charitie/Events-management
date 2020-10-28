import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "../../components/eventCard/EventCard";
import { ReactComponent as SearchIcon } from "../../images/magnifying-glass.svg";
import { fetchEvents } from "../../redux/actions/eventsActions";

import "./Events.scss";

const AllEvents = () => {
	const [query, setQuery] = useState("");
	const event = useSelector((state) => state.events);
	const { events, loading } = event;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchEvents());
	}, [dispatch]);

	const handleQuery = (event) => {
		setQuery(event.target.value);
	};

	const handleSearch = (events) => {
		if (events.length > 0) {
			return events.filter((event) => {
				return event.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
			});
		}
	};

	const filteredEvents = handleSearch(events);
	return (
		<div className='events-container'>
			<div className='main-content'>
				<div className='search'>
					<input
						value={query}
						className='search__input'
						type='text'
						placeholder='Search...'
						onChange={handleQuery}
					/>
					<button className='search__button'>
						<SearchIcon className='search__icon' />
					</button>
				</div>

				{events.length > 0 && (
					<EventCard
						showButtons='content__hide-control-buttons'
						events={filteredEvents}
						loading={loading}
					/>
				)}
			</div>
		</div>
	);
};

export default AllEvents;

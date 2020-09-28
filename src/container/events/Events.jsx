import React from "react";
import Header from "../../components/header/Header";
import { ReactComponent as SearchIcon } from "../../images/magnifying-glass.svg";
// import { loader } from "../../images/loader.gif";

import "./Events.scss";

const Events = () => {
	return (
		<div className='events-container'>
			{/* <Header /> */}
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
				<div className='events'>
					<div className='event'>
						<div className='title'>header</div>
						<div className='content'>
							<ul>
								<li>HOST : COSY</li>
								<li>Date : Sat,03 Oct 2020</li>
								<li> Location : Ruiru</li>
								<li> Location : Ruiru</li>
								<li>Category : social heri salamu</li>
							</ul>
						</div>
					</div>
					<div className='event'>
						<div className='title'>header</div>
						<div className='content'>
							<ul>
								<li>HOST : COSY</li>
								<li>Date : Sat,03 Oct 2020</li>
								<li> Location : Ruiru</li>
								<li> Location : Ruiru</li>
								<li>Category : social heri salamu</li>
							</ul>
						</div>
					</div>
					<div className='event'>
						<div className='title'>header</div>
						<div className='content'>
							<ul>
								<li>HOST : COSY</li>
								<li>Date : Sat,03 Oct 2020</li>
								<li> Location : Ruiru</li>
								<li> Location : Ruiru</li>
								<li>Category : social heri salamu</li>
							</ul>
						</div>
					</div>
					<div className='event'>
						<div className='title'>header</div>
						<div className='content'>
							<ul>
								<li>HOST : COSY</li>
								<li>Date : Sat,03 Oct 2020</li>
								<li> Location : Ruiru</li>
								<li> Location : Ruiru</li>
								<li>Category : social heri salamu</li>
							</ul>
						</div>
					</div>
					<div className='event'>
						<div className='title'>header</div>
						<div className='content'>
							<ul>
								<li>HOST : COSY</li>
								<li>Date : Sat,03 Oct 2020</li>
								<li> Location : Ruiru</li>
								<li> Location : Ruiru</li>
								<li>Category : social heri salamu</li>
							</ul>
						</div>
					</div>
					<div className='event'>
						<div className='title'>header</div>
						<div className='content'>
							<ul>
								<li>HOST : COSY</li>
								<li>Date : Sat,03 Oct 2020</li>
								<li> Location : Ruiru</li>
								<li> Location : Ruiru</li>
								<li>Category : social heri salamu</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;

import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { IoMdLogOut } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";

import logo from "../../images/logo3.Nt8vk";
import "./Header.scss";
import { Link, useRouteMatch } from "react-router-dom";

const Header = () => {
	const auth = useSelector((state) => state.auth);
	const { isAuthenticated } = auth;
	const  match  = useRouteMatch();

	const authHeader = (
		<>
			<nav className='header__nav header__nav--left'>
				<ul className='menu-items'>
					<li className='logo-item'>
						<img src={logo} alt='site logo' className='header__logo' />
					</li>
					<li className='menu-item'>
						<Link to='/events/create' className='header__link'>
							Create Events
						</Link>
					</li>
					<li className='menu-item'>
						<Link to='/events/my-events' className='header__link'>
							My Events
						</Link>
					</li>
					<li className='menu-item'>
						<Link to='/events' className='header__link'>
							View All Events
						</Link>
					</li>
				</ul>
			</nav>
			<nav className='header__nav header__nav--right'>
				<ul>
					<li className='user'>User</li>
					<li className=''>
						<Link to='/logout' className='header__link'>
							Logout &nbsp;
							<IoMdLogOut />
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);

	const guestHeader = (
		<>
			<img src={logo} alt='site logo' className='header__logo' />
			<nav className='header__nav'>
				<ul>
					<li className=''>Events</li>
					<li className=''>
						<Link to='/login'>
							<IoMdLogIn />
							Login
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);

	console.log("auth", isAuthenticated);
	return (
		<header className='header'>
			{
				// isAuthenticated ?
				authHeader
				// : guestHeader
			}
		</header>
	);
};

Header.prototype = {
	isAuthenticated: PropTypes.bool,
};

export default Header;

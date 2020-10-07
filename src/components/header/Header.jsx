import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Link, NavLink, useHistory, useRouteMatch } from "react-router-dom";

import { IoMdLogOut } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";

import logo from "../../images/logo3.Nt8vk";
import "./Header.scss";
import { logout } from "../../redux/actions/auth";
import { useEffect } from "react";

const Header = () => {
	const auth = useSelector((state) => state.auth);
	const { isAuthenticated, token } = auth;
	const dispatch = useDispatch();

	useEffect(() => {
		// dispatch(logout())
	}, []);

	const currentRoute = useHistory().location.pathname.toLowerCase();
	const authHeader = (
		<>
			<nav className='header__nav header__nav--left'>
				<ul className='menu-items'>
					<li className='logo-item'>
						<NavLink
							exact
							to='/'
							activeClassName='header__link--active'
							className='header__link header__link--img'
							active='true'>
							<img src={logo} alt='site logo' className='header__logo' />
						</NavLink>
					</li>
					<li className='menu-item'>
						<NavLink
							exact
							to='/events'
							activeClassName='header__link--active'
							className='header__link'
							active='true'>
							View All Events
						</NavLink>
					</li>
					<li className='menu-item'>
						<NavLink
							exact
							to='/events/my-events'
							className={
								currentRoute.includes("/events/my-events")
									? "header__link--active"
									: "header__link"
							}>
							My Events
						</NavLink>
					</li>
					<li className='menu-item'>
						<NavLink
							exact
							to='/events/create'
							className={
								currentRoute.includes("create")
									? "header__link--active"
									: "header__link"
							}>
							Create Events
						</NavLink>
					</li>
				</ul>
			</nav>
			<nav className='header__nav header__nav--right'>
				<ul>
					<li className='user'>User</li>
					<li onClick={() => dispatch(logout())}>
						<NavLink to='/' exact className='header__link header__link--login'>
							Logout &nbsp;
							<IoMdLogOut />
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);

	const guestHeader = (
		<>
			<NavLink
				to='/'
				active='true'
				activeClassName='header__link logo'
				className='header__link header__link--img'>
				<img src={logo} alt='site logo' className='header__logo' />
			</NavLink>

			<nav className='header__nav'>
				<ul>
					{/* <li className=''>
							<NavLink to='/events' className='header__link'>
								Events
							</NavLink>
						</li> */}
					<li className=''>
						<NavLink to='/login' className='header__link header__link--login'>
							<IoMdLogIn />
							Login
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);

	return (
		<header className='app-container__header header'>
			{isAuthenticated || token !== null ? authHeader : guestHeader}
		</header>
	);
};

Header.prototype = {
	isAuthenticated: PropTypes.bool,
	logout: PropTypes.func,
};

export default Header;

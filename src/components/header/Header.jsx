import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { IoMdLogOut } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";

import logo from "../../images/logo3.Nt8vk";
import "./Header.scss";
import { Link, NavLink, useHistory, useRouteMatch } from "react-router-dom";
import { logout } from "../../redux/actions/auth";
import { useEffect } from "react";

const Header = ({ logout }) => {
	const auth = useSelector((state) => state.auth);
	const { isAuthenticated } = auth;
	// const dispatch = useDispatch();
	// const match = useRouteMatch();

	const currentRoute = useHistory().location.pathname.toLowerCase();

	const authHeader = (
		<>
			<nav className='header__nav header__nav--left'>
				<ul className='menu-items'>
					<li className='logo-item'>
						{/* <NavLink 	 */}
						<img src={logo} alt='site logo' className='header__logo' />
					</li>
					<li className='menu-item'>
						<NavLink
							exact
							to='/events'
							activeClassName="header__link--active" 
							className='header__link'
							active
						>
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
					<li onClick={logout} className=''>
						{/* <NavLink  className='header__link'> */}
						Logout &nbsp;
						<IoMdLogOut />
						{/* </Link> */}
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
						<NavLink to='/login' className='header__link'>
							<IoMdLogIn />
							Login
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);

	console.log("auth", isAuthenticated);
	return (
		<header className='app-container__header header'>
			{/* {isAuthenticated ? */}
			{authHeader}
			{/* : guestHeader} */}
		</header>
	);
};

Header.prototype = {
	isAuthenticated: PropTypes.bool,
	logout: PropTypes.func,
};

export default connect(null, { logout })(Header);

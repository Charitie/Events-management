import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Landing.scss";

export function Landing() {
	const auth = useSelector((state) => state.auth);
	const { token } = auth;

	return (
		<main className='main'>
			<div className='main__cta-text'>Welcome To Fancy Events </div>
			{token !== null ? null : (
				<Link className='btn btn-white main__cta-button' to='/login'>
					Get Started
				</Link>
			)}
		</main>
	);
}

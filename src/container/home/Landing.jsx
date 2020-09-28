import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import "./Landing.scss";

export function Landing() {
	return (
		<main className='main'>
			<div className='main__cta-text'>Welcome To Fancy Events </div>
			<Link className='btn btn-white main__cta-button' to='/login'>
				Get Started
			</Link>
		</main>
	);
}

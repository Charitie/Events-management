import React, { useState } from "react";
import Proptypes from "prop-types";
import { Form } from "semantic-ui-react";
import "./login.scss";
import { Redirect, Link } from "react-router-dom";
export function Login(props) {
	const { login, loading, error, isAuthenticated } = props;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();
		login({ email, password });
	};
	if (isAuthenticated) {
		return <Redirect to='/events' />;
	}
	return (
		<section className='section-login'>
			<div className='login'>
				<div className='login__form-container'>
					<Form onSubmit={onSubmit} loading={loading} className='login__form'>
						<div className='u-margin-bottom-medium'>
							<h2 className='login__header'> Log in to Fancy Events</h2>
							{error && <div className='form-error'> {error.message}</div>}
						</div>
						<div className='form__group'>
							<input
								type='email'
								name='email'
								id='email'
								className='form__input'
								placeholder='email'
								value={email}
								onChange={(event) => setEmail(event.target.value)}
								required
							/>
							<label htmlFor='email' className='form__label'>
								email
							</label>
						</div>
						<div className='form__group'>
							<input
								type='password'
								name='password'
								id='password'
								className='form__input'
								placeholder='password'
								value={password}
								onChange={(event) => setPassword(event.target.value)}
								required
							/>
							<label htmlFor='email' className='form__label'>
								password
							</label>
						</div>
						<div className='form__buttons'>
							<button className='btn btn-white'>Login</button>
							<div className='redirect'>
								Don't have an account?{" "}
								<Link to='/signup' className='redirect-link'>
									Create here
								</Link>
							</div>
						</div>
					</Form>
				</div>
			</div>
		</section>
	);
}

Login.prototypes = {
	login: Proptypes.func,
	loading: Proptypes.bool,
	error: Proptypes.object,
};

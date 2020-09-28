import React, { useState } from "react";
import Proptypes from "prop-types";
import { Form } from "semantic-ui-react";
import "./signup.scss";
import { Redirect, Link } from "react-router-dom";
export function Signup(props) {
  const { signup, loading, error, isAuthenticated } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    signup({name, email, password, phoneNumber: phone });
  };
  if (isAuthenticated) {
    return <Redirect to="/events" />;
  }
  return (
    <section className="section-signup">
      <div className="signup">
        <div className="signup__form-container">
          <Form onSubmit={onSubmit} loading={loading} className="signup__form">
            <div className="u-margin-bottom-medium">
              <h2 className='header'> Sign up for Fancy Events</h2>
              {error && <div className="form-error"> {error.message}</div>}
            </div>
            <div className="form__group">
              <input
                type="text"
                name="fullName"
                id="name"
                className="form__input"
                placeholder="full name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <label htmlFor="email" className="form__label">
                Full Name
              </label>
            </div>
            <div className="form__group">
              <input
                type="email"
                name="email"
                id="email"
                className="form__input"
                placeholder="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <label htmlFor="email" className="form__label">
                email
              </label>
            </div>
            <div className="form__group">
              <input
                type="number"
                name="phone"
                id="phone"
                className="form__input"
                placeholder="Phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
              <label htmlFor="email" className="form__label">
                Phone Number
              </label>
            </div>
            <div className="form__group">
              <input
                type="password"
                name="password"
                id="password"
                className="form__input"
                placeholder="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <label htmlFor="email" className="form__label">
                password
              </label>
            </div>
            <div className="form__buttons">
              <button className='btn btn-white'>signup</button>
              <div className='redirect'>
                Already have an account? <Link to="/login" className='redirect-link'>Login here</Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}

Signup.prototypes = {
  signup: Proptypes.func,
  loading: Proptypes.bool,
  error: Proptypes.object,
};

import React from "react";
import { IoMdLogIn } from 'react-icons/io';
import "./Landing.scss";
import { Link } from "react-router-dom";
import logo from "../../images/logo3.Nt8vk";

export function Landing() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="site logo" className="header__logo" />
        <nav className="header__nav">
          <ul>
            <li className="">Events</li>
              <li className=""> <IoMdLogIn />Login </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="main__cta-text">some other stuff will come here </div>
          <Link className="btn btn-white main__cta-button" to="/login"> Get Started</Link>
      </main>
    </div>
  );
}

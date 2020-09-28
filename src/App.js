import React from "react";
import { Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.scss";
import { Landing } from "./container/home/Landing";
import Login from "./container/login/login.container";
import Signup from "./container/signup/signup.container";
import { NotFound } from "./container/home/notFound";
import Events from "./container/events/Events";
import MyEvents from "./container/events/myEvents/MyEvents";
import CreateEvents from "./container/events/createEvents/CreateEvents";
import Header from "./components/header/Header";

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={Signup} />
				<Route exact path='/events' component={Events} />
				<Route exact path='/events/my-events' component={MyEvents} />
				<Route exact path='/events/create' component={CreateEvents} />
				<Route component={NotFound} />
			</Switch>
		</>
	);
}

export default App;

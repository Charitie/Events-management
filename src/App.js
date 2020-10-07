import React, { useEffect } from "react";
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
import { PrivateRoute } from "./routes/PrivateRoute";
import { setAuth } from "./redux/actions/auth";
import { useDispatch } from "react-redux";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		if (localStorage.token) {
			dispatch(setAuth());
		}
	}, []);

	return (
		<div className='app-container'>
			<Header className='navbar' />
			<div className='pages'>
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={Signup} />
					<PrivateRoute exact path='/events' component={Events} />
					<PrivateRoute exact path='/events/my-events' component={MyEvents} />
					<PrivateRoute exact path='/events/create' component={CreateEvents} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</div>
	);
}

export default App;

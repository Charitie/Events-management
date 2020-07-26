import React from 'react';
import { Route, Switch} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import { Landing} from './components/home/Landing';
import Login from './components/login/login.container';
import { NotFound } from './components/home/notFound';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/"  component={Landing}/>
        <Route exact path="/login" component={Login}/>
          <Route exact path="/home">
            <div> you are home</div>
          </Route>
        <Route component={NotFound}/>
      </Switch>
    </>
  );
}

export default App;

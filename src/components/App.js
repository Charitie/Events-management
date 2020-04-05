import React from 'react';
import { Route, Switch} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Landing} from './home/Landing';
import { Login } from './login/login';
import { NotFound } from './home/notFound';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/login" exact component={Login}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;

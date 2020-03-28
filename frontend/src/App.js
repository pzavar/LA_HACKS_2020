import React from 'react';
import {Router, Route, Switch } from 'react-router-dom';
import { history } from './Utils/history';
import { PrivateRoute, HomeRoute } from './Components/PrivateRoutes/privateRoute';
import Landing from './Containers/Landing/landing';
import Login from './Containers/Login/login';


const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
);

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
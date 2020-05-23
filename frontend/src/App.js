import React from 'react';
import {Router, Route, Switch } from 'react-router-dom';
import { history } from './Utils/history';
import Landing from './Containers/Landing/landing';
import Home from './Containers/Home/home';
import Register from './Containers/Register/register';
import Grocery from './Containers/Grocery/Grocery';
import SaveToken from './Utils/SaveToken';
import About from './Containers/About/about';


const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/grocery" component={Grocery} />
      <Route exact path="/about" component={About} />
      <Route exact path="/saveToken" component={SaveToken} />
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
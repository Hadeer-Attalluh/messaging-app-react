import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginForm from './Components/Forms/Login';
import SignUpForm from './Components/Forms/SignUp';

import UsersListing from './Components/User/Listing';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LoginForm} />
          <Route path="/login" exact component={LoginForm} />
          <Route match path="/signup" component={SignUpForm} />
          <Route match path="/users/" component={UsersListing} />
          {/* <Route match path="/:userId/profile" component={} />  */}
          {/* <Route match path="/:id/chats" component={} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;

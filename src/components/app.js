import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Calendar from './pages/calendar';
import Pictures from './pages/pictures';
import Documents from './pages/documents';
import Login from './auth/login';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/pictures" component={Pictures} />
            <Route path="/documents" component={Documents} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

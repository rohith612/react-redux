import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './_helpers/store';
import { history } from './_helpers/history';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Home from './Home/Home';
import Profile from './Profile/Profile';

import Header from './Template/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { UnauthenticatedRoute } from './_components/UnauthenticatedRoute';
import { PrivateRoute } from './_components/PrivateRoute';


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav> */}
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <UnauthenticatedRoute path="/login">
            <Login />
          </UnauthenticatedRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);


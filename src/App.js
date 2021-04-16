import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { auth } from './services/firebase';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/profile' />}
    />
  )
}

function App() {

  const [authenticated, setAuthenticated] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    auth().onAuthStateChanged((user) => {

      var newAuthenticated = authenticated;
      var newLoading = loading;
      if (user) {
        newAuthenticated = true;
        newLoading = false;
      } else {
        newAuthenticated = false;
        newLoading = false;
      }
      setAuthenticated(newAuthenticated);
      setLoading(newLoading);
    })
  }, []);

  return loading === true ? <h2>Loading...</h2> : (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" authenticated={authenticated}  component={Home}></PrivateRoute>
        <PrivateRoute path="/profile" authenticated={authenticated} component={Profile}></PrivateRoute>
        <PublicRoute path="/signup" authenticated={authenticated} component={Signup}></PublicRoute>
        <PublicRoute path="/login" authenticated={authenticated} component={Login}></PublicRoute>
      </Switch>
    </Router>
  );
}

export default App;

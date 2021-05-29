import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import ProjectView from '../views/ProjectView';
import TechnologyView from '../views/TechnologyView';
import AuthedView from '../views/AuthView';
import AboutMe from '../components/AboutMe';
import Contact from '../views/Contact';

// The PrivateRoute function is creating a private route and returing the specified route based on the props
// We specify the specific props we want to use in the routeChecker and pass the rest with the spread
const PrivateRoute = ({ component: Component, admin, ...rest }) => {
  // when we call this function in the return, it is looking for an argument. `props` here is taco.
  const routeChecker = (taco) => (admin
    ? (<Component {...taco} admin={admin} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
  // this render method is one we can use instead of component. Since the components are being dynamically created, we use render. Read the docs for more info: https://reactrouter.com/web/api/Route/render-func
    // Just like in the routes if we want the dynamically rendered component to have access to the Router props, we have to pass `props` as an argument.
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  admin: PropTypes.any,
  component: PropTypes.func
};

export default function Routes({
  user, admin
}) {
  return (
    <div>
    <Switch>
      <Route
      exact path='/'
      component={Home}
      />
      <PrivateRoute
      exact
      admin={admin}
      path='/projects'
      component={() => <ProjectView admin={admin}/>}
      />
      <Route
      path='/technologies'
      component={TechnologyView}
      />
      <Route
      path='/about'
      component={AboutMe}
      />
      <Route
      path='/contact'
      component={Contact}
      />
      <Route
        exact
        path='/authed'
        component={() => <AuthedView user={user}/>}
      />
    </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any,
};

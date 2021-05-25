import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import ProjectView from '../views/ProjectView';
import TechnologyView from '../views/TechnologyView';

// The PrivateRoute function is creating a private route and returing the specified route based on the props
// We specify the specific props we want to use in the routeChecker and pass the rest with the spread
const PrivateRoute = ({ component: Component, user, ...rest }) => {
  // when we call this function in the return, it is looking for an argument. `props` here is taco.
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
  // this render method is one we can use instead of component. Since the components are being dynamically created, we use render. Read the docs for more info: https://reactrouter.com/web/api/Route/render-func
    // Just like in the routes if we want the dynamically rendered component to have access to the Router props, we have to pass `props` as an argument.
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  user: PropTypes.any,
  component: PropTypes.any
};

export default function Routes({
  user, projects, setProjects, technologies, setTechnologies
}) {
  return (
    <Switch>
      <Route exact path='/' component={() => <Home user={user} />} />
      <Route
      user={user}
      path='/projects'
      component={() => <ProjectView user={user} projects={projects} setProjects={setProjects}/>}
      />
      <Route
      user={user}
      path='/technology'
      component={() => <TechnologyView user={user} technologies={technologies} setTechnologies={setTechnologies}/>}
      />
    </Switch>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  setProjects: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
  setTechnologies: PropTypes.func.isRequired,
  technologies: PropTypes.array.isRequired,
};
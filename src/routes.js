import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MainContent from './pages/MainContent';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainContent} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
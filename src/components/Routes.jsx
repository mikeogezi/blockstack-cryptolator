import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Landing from './Landing';
import SignIn from './SignIn';
import LogOut from './LogOut';
import Converter from './Converter';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/sign-in/" exact component={SignIn} />
      <Route path="/log-out/" exact component={LogOut} />
      <Route path="/app/" exact component={Converter} />
    </Switch>
  )
};

export default Routes;
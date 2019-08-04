import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Landing from './Landing';

import Terms from './Terms';
import Converter from './Converter';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />

      <Route path="/terms/" component={Terms} />

      <Route path="/cryptolator/app/" exact component={Converter} />
    </Switch>
  )
};

export default Routes;
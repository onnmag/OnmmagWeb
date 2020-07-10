import React from 'react';
import { Route } from 'react-router-dom';

import ROUTES from './routes';

function Routes() {
  const getExactValue = (exact) => {
    if (exact === false) {
      return exact;
    }
    return true;
  };
  return (
    ROUTES.map(route => (
      <Route
        exact={getExactValue(route.exact)}
        path={route.path}
        component={route.component}
      />
    ))
  );
}

export default Routes;

import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../components/pages/Login';
import Home from '../components/pages/Home';
import ROUTES from '../components/pages/Home/Routes/routes';

const OpenRoutes = () => {
    const getExactValue = (exact) => {
      if (exact === false) {
        return exact;
      }
        return true;
    };
    return (
      <div style={{ height: '100%' }}>
        <Route exact path="/login" component={Login} />
        <Route exact={false} path="/" component={Home} />
        {
          ROUTES.map(route => (
            <Route
              exact={getExactValue(route.exact)}
              path={route.path}
              component={route.component}
            />
          ))
        }
      </div>
    );
};
export default OpenRoutes;

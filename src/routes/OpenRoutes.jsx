import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../components/pages/Login';
import Home from '../components/pages/Home';
import PrivateRoute from '../components/common/PrivateRoutes';

const OpenRoutes = () => (
      <div style={{ height: '100%' }}>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact={false} path="/dashboard" component={Home} />
      </div>
    );
export default OpenRoutes;

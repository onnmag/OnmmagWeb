import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../components/pages/Login';
import Main from '../components/pages/Main';
import PrivateRoute from '../components/common/PrivateRoutes';

const OpenRoutes = () => (
      <div style={{ height: '100%' }}>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact={false} path="/dashboard" component={Main} />
      </div>
    );
export default OpenRoutes;

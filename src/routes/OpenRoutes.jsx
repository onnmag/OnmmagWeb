import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../components/pages/Login';
import Home from '../components/pages/Home';

const OpenRoutes = () => (
      <div style={{ height: '100%' }}>
        <Route exact path="/login" component={Login} />
        <Route exact={false} path="/" component={Home} />
      </div>
    );
export default OpenRoutes;

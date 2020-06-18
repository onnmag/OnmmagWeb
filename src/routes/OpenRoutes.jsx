import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '../components/pages/Home';
import LoginLayout from '../components/pages/Login';

class OpenRoutes extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={LoginLayout} />
      </div>
    );
  }
}
export default OpenRoutes;

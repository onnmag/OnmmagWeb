import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '../components/pages/Home';

class OpenRoutes extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}
export default OpenRoutes;

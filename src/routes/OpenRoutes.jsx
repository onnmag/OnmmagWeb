import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '@pages/Home';

class OpenRoutes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}
export default OpenRoutes;

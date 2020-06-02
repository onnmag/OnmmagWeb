import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import OpenRoutes from './routes/OpenRoutes';

import './styles/app.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <OpenRoutes />
      </BrowserRouter>
    );
  }
}

render(
    <App />,
  document.getElementById('container'),
);


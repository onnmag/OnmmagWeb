import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import OpenRoutes from './routes/OpenRoutes';

import './styles/app.scss';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);
  return (
    <BrowserRouter>
      <OpenRoutes />
    </BrowserRouter>
  );
}

render(
    <App />,
  document.getElementById('container'),
);


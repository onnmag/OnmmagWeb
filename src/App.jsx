import React, { useEffect, createContext, useContext, useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import OpenRoutes from './routes/OpenRoutes';
import { SIDEBAR } from './mocks';

import './styles/app.scss';

const AppContext = createContext(null);

function App() {
  const [activePage, setActivePage] = useState(SIDEBAR.PAGES[0]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  return (
    <AppContext.Provider value={{
      activePage,
      setActivePage,
    }}
    >
      <BrowserRouter>
        <OpenRoutes />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

const useAppState = () => useContext(AppContext);

export { useAppState };

render(
    <App />,
  document.getElementById('container'),
);


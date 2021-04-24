import React, { useEffect, createContext, useContext, useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import OpenRoutes from './routes/OpenRoutes';
import AuthProvider from './core/authProvider';
import { SIDEBAR } from './mocks';

import { getActiveTheme, setSelectedTheme } from './utils';
import { THEMES } from './constants/STATICS';

import './styles/app.scss';

const AppContext = createContext(null);

function App() {
  const [activePage, setActivePage] = useState(SIDEBAR.PAGES[0]);
  const [activeTheme, setActiveTheme] = useState(getActiveTheme() || THEMES.LIGHT);

  const setTheme = (theme) => {
    setActiveTheme(theme);
    setSelectedTheme(theme);
  };

  const toggleTheme = () => {
    if (activeTheme === THEMES.LIGHT) {
      setTheme(THEMES.DARK);
    } else {
      setTheme(THEMES.LIGHT);
    }
  };

  useEffect(() => {
    setSelectedTheme(activeTheme);
  }, [activeTheme]);


  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContext.Provider value={{
          activePage,
          setActivePage,
          activeTheme,
          setTheme,
          toggleTheme,
        }}
        >
            <OpenRoutes />
        </AppContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

const useAppState = () => useContext(AppContext);

export { useAppState };

render(
    <App />,
  document.getElementById('root'),
);


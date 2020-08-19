import React, { useEffect, createContext, useContext, useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import { AUTH0 } from "./core/KEYS";
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
    <Auth0Provider
      domain={AUTH0.DOMAIN}
      clientId={AUTH0.CLIENT_ID}
      redirectUri={AUTH0.REDIRECT_URI}
    >
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
    </Auth0Provider>
  );
}

const useAppState = () => useContext(AppContext);

export { useAppState };

render(
    <App />,
  document.getElementById('container'),
);


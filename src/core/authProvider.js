import React, { useContext, createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';


const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const history = useHistory();
  const [userToken, setUserToken] = useState(null);
  const [isLoggedIn, setLoginStatus] = useState(!!userToken);

  useEffect(() => {
    // isUserLoggedIn
    const isUserToken = localStorage.getItem('sso-token');
    if (isUserToken) {
      setUserToken(true);
      setLoginStatus(true);
      history.push('/dashboard');
    }
  }, []);

  const logIn = () => {
    localStorage.setItem('sso-token', 'xyz');
    setUserToken('xyz');
    setLoginStatus(true);
    history.push('/dashboard');
  };

  const logOut = () => {
    localStorage.removeItem('sso-token');
    setLoginStatus(false);
    setUserToken(null);
    history.push('/login');
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      logIn,
      logOut,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export {
  AuthProvider as default,
  useAuth,
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

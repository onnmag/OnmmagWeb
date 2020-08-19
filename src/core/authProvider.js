import React, { useContext, createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types';


const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const history = useHistory();
  const [userToken, setUserToken] = useState(null);
  const [isLoggedIn, setLoginStatus] = useState(!!userToken);
  const { isLoading, isAuthenticated, loginWithRedirect, logout, error } = useAuth0();

  useEffect(() => {
    // initialize auth0
  }, []);


  useEffect(() => {
    // const isUserToken = localStorage.getItem('sso-token');
    // if (isUserToken) {
    //   setUserToken(true);
    //   setLoginStatus(true);
    //   history.push('/dashboard');
    // } else {
    //   history.push('/login');
    // }
    if (!isLoading) {
      if (isAuthenticated) {
        console.log('entered');
        setLoginStatus(true);
        history.push('/dashboard');
      } else {
        history.push('/login');
      }
    }
  }, [history, isAuthenticated, isLoading]);

  const logIn = () => {
    // localStorage.setItem('sso-token', 'xyz');
    // setUserToken('xyz');
    // setLoginStatus(true);
    // history.push('/dashboard');

    loginWithRedirect()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };


  const logOut = () => {
    // localStorage.removeItem('sso-token');
    // setLoginStatus(false);
    // setUserToken(null);
    // history.push('/login');
    setLoginStatus(false);
    logout();
  };

  const signUp = () => [

  ];
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error please refresh the page</span>;
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      logIn,
      logOut,
      signUp,
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

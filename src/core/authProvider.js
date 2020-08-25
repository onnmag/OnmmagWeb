import React, { useContext, createContext, useState, useEffect } from 'react';
import auth0 from 'auth0-js';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import params from '../config/auth0-parma.json';


const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const history = useHistory();
  const [userToken, setUserToken] = useState(null);
  const [isLoggedIn, setLoginStatus] = useState(!!userToken);
  const auth0Client = new auth0.WebAuth({
    domain: params.domain,
    clientID: params.clientId,
    audience: params.apiAudience,
    redirectUri: params.callbackUrl,
    scope: params.scope,
    responseType: 'code',
    grantType: 'refresh_token',
  });

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/dashboard');
    } else {
      history.push('/login');
    }
  }, [history, isLoggedIn]);


  const logIn = ({ username, password }) => {
    auth0Client.client.login({
      realm: 'Username-Password-Authentication',
      username,
      password,
      grantType: 'refresh_token',
    }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        // auth0.client.userInfo(accessToken, (err, user) => {
        //   console.log(user);
        // });
        // TODO: set TOKEN
        // setLoginStatus(true);
      }
    });
  };

  const logOut = () => {

  };

  const signUp = () => [

  ];

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

import React, { useContext, createContext, useState, useEffect } from 'react';
import auth0 from 'auth0-js';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import params from '../config/auth0-parma.json';
import { AUTH0 } from './KEYS';
import LocalStorage from '../utils/LocalStorage';

import { usePostApi } from '../hooks/useApi';
import { signUpApi } from '../components/modules/Login/Main/partials/Form/partials/SignUp/apiRequest';

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const history = useHistory();
  const { makeRequest } = usePostApi();
  const [isLoggedIn, setLoginStatus] = useState(LocalStorage.get('access-token'));
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
        LocalStorage.set('access-token', data.accessToken, data.expiresIn);
        setLoginStatus(true);
      }
    });
  };

  const logOut = () => {
    LocalStorage.deleteItem('access-token');
    setLoginStatus(false);
  };

  const signUp = (data) => {
    makeRequest(signUpApi({
      ...data,
      client_id: AUTH0.CLIENT_ID,
    }))
      .then(res => {
        console.log({ res });
      }).catch(err => {
        console.log({ err });
    });
  };

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

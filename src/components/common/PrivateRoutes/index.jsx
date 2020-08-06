import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../../../core/authProvider';


function PrivateRoute({ component: Component, ...rest }) {
  const { isLoggedIn } = useAuth();
  console.log({ isLoggedIn });
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  rest: PropTypes.object,
};

PrivateRoute.defaultProps = {
  rest: {},
};

export default PrivateRoute;

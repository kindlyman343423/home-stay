import React from "react";

import { Route, Redirect } from "react-router-dom";

import authService from "../../services/auth-service";

const ProtectedRoute = props => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props =>
        authService.isAuthenticated() ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;

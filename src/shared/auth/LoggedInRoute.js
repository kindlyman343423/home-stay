import React from "react";
import { Route, Redirect } from "react-router-dom";

import authService from "../../services/auth-service";

const LoggedInRoute = props => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props =>
        authService.isAuthenticated() ? (
          <Redirect to="/rentals" />
        ) : (
          <Component {...props} {...rest} />
        )
      }
    />
  );
};

export default LoggedInRoute;

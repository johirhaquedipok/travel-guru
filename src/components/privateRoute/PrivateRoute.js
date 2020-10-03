import { Redirect, Route } from 'react-router-dom';

import React from 'react';
import { UserContext } from '../../App';
import { useContext } from 'react';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser] = useContext(UserContext)
    return (
        
        <Route 
        {...rest}
        render={({ location }) =>
          loggedInUser.email ? (
            children
          ) : (
            <Redirect 
              to={{
                pathname: "/sigin",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;
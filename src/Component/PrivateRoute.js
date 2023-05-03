import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children}) => {
    console.log("child", children)
    const userId = Cookies.get('userId');
  if (userId == undefined) {
    return <Navigate to='/login' />;
  }

  // if (
  //   (!email || !displayName) &&
  //   to !== '/add-user-details' &&
  //   to !== '/onboarding'
  // ) {
  //   return <Navigate to='/add-user-details' />;
  // }

  return children;
};

export default PrivateRoute;
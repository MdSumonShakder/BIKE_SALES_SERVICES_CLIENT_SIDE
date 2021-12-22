import React from 'react';
import useAuth from './../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location =useLocation();
    if (isLoading) { return <Spinner animation="border" variant="danger" /> }
    if(user.email){
        return children;
    }
    
    return <Navigate to="/login" state={{from: location}} />;
  
};

export default PrivateRoute;
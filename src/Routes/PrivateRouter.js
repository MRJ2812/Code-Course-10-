import React, { useContext } from 'react';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRouter = ({ children }) => {

    const location = useLocation();
    const { user, loader } = useContext(AuthContext);

    if (loader) {
        return <p>Loading...</p>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;

};

export default PrivateRouter;
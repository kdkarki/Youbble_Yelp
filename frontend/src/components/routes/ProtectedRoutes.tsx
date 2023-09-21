import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, Route, RouteProps } from 'react-router-dom';
import DashboardPage from '../DashboardPage';

const ProtectedRoute: React.FC<RouteProps> = (props) => {
    const { isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        //return <Route {...props} />;
        return <DashboardPage />;
    } else {
        //return <Navigate to="/" replace />;
        return<>
        {'this is dashboard page'}
        <DashboardPage />;
        </>
    }
};

export default ProtectedRoute;

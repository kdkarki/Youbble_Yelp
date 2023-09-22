import React, {useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { RouteProps } from 'react-router-dom';

const ProtectedRoute: React.FC<RouteProps> = (props) => {
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect();
        }
    }, [isAuthenticated, isLoading, loginWithRedirect]);

    if (isAuthenticated) {
        return <div {...props}></div>;
    } else {
        return <div>Loading...</div>
    }
};

export default ProtectedRoute;

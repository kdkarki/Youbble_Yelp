import React, {useEffect, useState} from 'react';
import { IdToken, useAuth0 } from '@auth0/auth0-react';
import { RouteProps } from 'react-router-dom';
import { fetchUserRole } from "../../api/fetchData";
import RoleRequest from "../RoleRequests";
import Navbar from '../NavBar';

const ProtectedRoute: React.FC<RouteProps> = (props) => {
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    const [hasRole, setHasRole] = useState<boolean | null>(null);
    const [useIdToken, setIdToken] = useState<IdToken | null>(null);

    const { getAccessTokenSilently, getIdTokenClaims } = useAuth0();

    useEffect(() => {
      // Assuming you have a method to fetch from your backend
      if(isAuthenticated)
      {
        (async () => {
            const roleInfo = await fetchUserRole(await getAccessTokenSilently());
            setHasRole(roleInfo.hasRole);
            const idToken = await getIdTokenClaims();
            console.log('idToken: ',idToken);
            setIdToken(idToken ?? null);
            })();
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect();
        }
    }, [isAuthenticated, isLoading, loginWithRedirect]);

    if (isAuthenticated) {
        if(hasRole === null) {
            return <div>Loading...</div>
        } else if(!hasRole) {
            return <RoleRequest />;
        }
        return <div {...props}></div>;
    } else {
        return <div>Loading...</div>
    }
};

export default ProtectedRoute;

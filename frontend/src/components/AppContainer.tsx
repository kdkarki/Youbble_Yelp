import React, { useEffect, useState } from 'react';
import { IdToken, useAuth0 } from '@auth0/auth0-react';
import { fetchUserRole } from '../api/fetchData';
import { useAuth } from '../contexts/AuthContext';

type AppContainerProps = {
  children: React.ReactNode;
};

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  const { isAuthenticated, isLoading, getIdTokenClaims, getAccessTokenSilently, loginWithRedirect } = useAuth0();
  const { setAuthInfo } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      // Get the ID token
      (async() => {
        const roleInfo = await fetchUserRole(await getAccessTokenSilently());
        const tokenClaims = await getIdTokenClaims();
        setAuthInfo({
            isAuthenticated: isAuthenticated,
            isLoading: isLoading,
            roles: roleInfo.roles ?? [],
            idToken: tokenClaims ?? null,
            });

      })();
    }
  }, [isAuthenticated, getIdTokenClaims, getAccessTokenSilently]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
        loginWithRedirect();
    }
}, [isAuthenticated, isLoading, loginWithRedirect]);

  return <>{children}</>;  // Here, you can pass roles and idToken as props if needed
};

export default AppContainer;

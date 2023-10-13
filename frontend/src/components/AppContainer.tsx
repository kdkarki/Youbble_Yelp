import React, { useEffect, useState } from 'react';
import { IdToken, useAuth0 } from '@auth0/auth0-react';
import { useSnackbar } from 'notistack';
import { fetchAccessRequests, fetchUserRole } from '../api/fetchData';
import { useAuth } from '../contexts/AuthContext';
import { useDashboard } from '../contexts/DashboardContext';

type AppContainerProps = {
  children: React.ReactNode;
};

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  const { isAuthenticated, isLoading, getIdTokenClaims, getAccessTokenSilently, loginWithRedirect } = useAuth0();
  const { setAuthInfo, roles } = useAuth();
  const { setPendingRequests, setApprovedRequests } = useDashboard();
  const {enqueueSnackbar} = useSnackbar();


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

useEffect(() => {
    if (isAuthenticated && roles && roles.includes("admin")) {
      (async () => {
        try {
            const accessRequests = await fetchAccessRequests(await getAccessTokenSilently());
            setPendingRequests(accessRequests?.accessRequests.filter((ar: any) => ar.status === "Pending") ?? []);
            setApprovedRequests(accessRequests?.accessRequests.filter((ar: any) => ar.status === "Approved") ?? []);
        } catch (err: any) {
            enqueueSnackbar(err?.message ?? 'Error fetching access requests', { variant: 'error' });
        }
        })();
    }
},[roles]);

  return <>
    {children}
    </>;  // Here, you can pass roles and idToken as props if needed
};

export default AppContainer;

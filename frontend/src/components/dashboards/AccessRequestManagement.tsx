// AccessRequestManagement.tsx

import { get } from 'http';
import React, { useEffect, useState } from 'react';
import { assignUserRole, fetchAccessRequests } from '../../api/fetchData';
import { useAuth0 } from '@auth0/auth0-react';

const AccessRequestManagement = () => {
  const [requests, setRequests] = useState<[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { getAccessTokenSilently } = useAuth0();
  

  useEffect(() => {
    setLoading(true);
    (async () => {
        try {
            const accessRequests = await fetchAccessRequests(await getAccessTokenSilently());
            setRequests(accessRequests?.accessRequests ?? []);
            setLoading(false);
        } catch (err: any) {
            setError(err?.message);
            setLoading(false);
        }
        })();
  }, []);

  const handleApproval = (userId: string, role: string) => {
    setLoading(true);
    (async () => {
        try {
            const accessRequests = await assignUserRole(await getAccessTokenSilently(), userId, role);
            setLoading(false);
        } catch (err: any) {
            setError(err?.message);
            setLoading(false);
        }
    })();
  };

  const handleChangeRole = (_requestId: string) => {
    // Make an API call to disapprove the request
    // Update the local state/UI
  };

  return (
    <div>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}
    {requests.map((request: any) => (
      <div key={request.userId}>
        <p>{request.email}</p>
        <button onClick={() => handleApproval(request.userId, request.requestedRole)}>Approve</button>
      </div>
    ))}
  </div>
  );
};

export default AccessRequestManagement;

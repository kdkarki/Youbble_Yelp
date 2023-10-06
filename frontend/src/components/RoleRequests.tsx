import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useSnackbar } from 'notistack';
import '../css/RoleRequest.css';
import { useAuth } from '../contexts/AuthContext';
import { fetchRequestedUserRole, requestUserRole } from '../api/fetchData';

const RoleRequest: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [requestMade, setRequestMade] = useState(false);
  const userEmail = useAuth().idToken?.email;
  const { getAccessTokenSilently } = useAuth0();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const getRequestedRole = async () => {
      if (userEmail) {
        const response = await fetchRequestedUserRole(await getAccessTokenSilently());
        if (response?.requestedRole) {
          setSelectedRole(response.requestedRole);
          setRequestMade(true);
        }
      }
    };
    getRequestedRole();
  }, []);

  const handleSubmit = async () => {
    if (selectedRole && userEmail) {
      try{
        const response = await requestUserRole(await getAccessTokenSilently(), selectedRole, userEmail);
        if(response?.status == 200) {
          setRequestMade(true);
          enqueueSnackbar('Role requested', { variant: 'success' });
        } else {
          enqueueSnackbar(response?.message ?? 'Error requesting role', { variant: 'error' });
        }
      } catch (e) {
        enqueueSnackbar('Error requesting role', { variant: 'error' });
      }
    }
  };

  return (
    <div className="role-request-container">
      <h2>Welcome! Please Request a Role</h2>

      <div>
        <label>
          <input
            type="radio"
            name="role"
            value="user"
            checked={selectedRole === 'user'}
            onChange={() => setSelectedRole('user')}
            disabled={requestMade}
          />
          User
        </label>

        <label>
          <input
            type="radio"
            name="role"
            value="admin"
            checked={selectedRole === 'admin'}
            onChange={() => setSelectedRole('admin')}
            disabled={requestMade}
          />
          Admin
        </label>
      </div>

      <button onClick={handleSubmit} disabled={requestMade}>Submit Request</button>
    </div>
  );
};

export default RoleRequest;

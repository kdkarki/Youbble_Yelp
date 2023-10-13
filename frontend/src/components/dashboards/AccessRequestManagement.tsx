import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { assignUserRole } from '../../api/fetchData';
import { useAuth0 } from '@auth0/auth0-react';
import { useDashboard } from '../../contexts/DashboardContext';

const AccessRequestManagement = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { getAccessTokenSilently } = useAuth0();
  const { pendingRequests, approvedRequests } = useDashboard();

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
    <section>
      <h2>Pending Requests</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeading>Email</TableHeading>
            <TableHeading>Requested Role</TableHeading>
            <TableHeading>Action</TableHeading>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pendingRequests.map((request) => (
            <TableRow key={request._id}>
              <TableCell>{request.email}</TableCell>
              <TableCell>{request.requestedRole}</TableCell>
              <TableCell>
                <button onClick={() => handleApproval(request.userId, request.requestedRole)}>Approve</button>
                {/*<select defaultValue={request.requestedRole} onChange={(e) => handleChangeRole(request.id, e.target.value)}>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
    <section>
      <h2>Approved Requests</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeading>Email</TableHeading>
            <TableHeading>Requested Role</TableHeading>
            {/*<TableHeading>Approved By</TableHeading>*/}
            <TableHeading>Approved Date</TableHeading>
          </TableRow>
        </TableHeader>
        <TableBody>
          {approvedRequests.map((request) => (
            <TableRow key={request._id}>
              <TableCell>{request.email}</TableCell>
              <TableCell>{request.requestedRole}</TableCell>
              {/*<TableCell>{request.approvedBy}</TableCell>*/}
              <TableCell>{new Date(request.approvedDate).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  </div>
  );
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #2c3e50;
  color: #ecf0f1;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TableHeading = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;


export default AccessRequestManagement;

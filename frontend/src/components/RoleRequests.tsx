import React, { useState } from 'react';
import '../css/RoleRequest.css';

const RoleRequest: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleSubmit = () => {
    if (selectedRole) {
      // Handle the role request, e.g., send it to your backend or Auth0 rules or hooks.
      console.log(`Requested role: ${selectedRole}`);
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
          />
          Admin
        </label>
      </div>

      <button onClick={handleSubmit}>Submit Request</button>
    </div>
  );
};

export default RoleRequest;

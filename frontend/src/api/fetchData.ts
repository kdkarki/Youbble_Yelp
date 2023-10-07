import { useAuth0 } from "@auth0/auth0-react";

export const searchYelp = async (items: string, location: string, token: string) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/yelp-search`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items, location })
    });

    const data = await response.json();
    return data;
};

export const fetchUserRole = async (token: string) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/role`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();
  return data;
}

export const fetchRequestedUserRole = async (token: string) => {
  try{
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/access-request`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
    
  const data = await response.json();
  return data;
  } catch (error) {
    console.error("Error fetching user role:", error);
    throw error;
  }
};

export const requestUserRole = async (token: string, userRole: string, userEmail: string) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/access-request`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: userEmail,
        requestedRole: userRole
      })
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error submitting role request:", error);
  }
};

export const fetchAccessRequests = async (token: string) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/access-requests`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching access requests:", error);
  }
}

export const assignUserRole = async (token: string, userId: string, role: string) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/assign-role/${userId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ role })
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error assigning role:", error);
  }
}
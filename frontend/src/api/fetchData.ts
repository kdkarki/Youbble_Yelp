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
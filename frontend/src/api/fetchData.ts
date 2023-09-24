import { useAuth0 } from "@auth0/auth0-react";

export const searchYelp = async (items: string, location: string, token: string) => {
    const response = await fetch('http://localhost:8080/api/yelp-search', {
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

import { useAuth0 } from "@auth0/auth0-react";

export const searchYelp = async (items: string, location: string, token: string) => {
    // Simulate a delay for fetching data
    await new Promise(resolve => setTimeout(resolve, 500));

    // In a real scenario, you'd make a fetch/axios call to your backend like so:
    /*
    const response = await fetch('YOUR_BACKEND_ENDPOINT', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items, location })
    });

    const data = await response.json();
    return data;
    */

    // For now, return mock data:
    return mockYelpResponse;
};


export const mockYelpResponse = 
{
  "businesses": [
    {
      "id": "9j3LpUwW9OyK6W3qPdGh1g",
      "name": "Good Eats Cafe",
      "location": {
        "address1": "123 Food St",
        "city": "Yummytown",
        "zip_code": "12345",
        "country": "US",
        "state": "CA"
      },
      "rating": 4.5,
      "phone": "+15551234567",
      "image_url": "https://example.com/image1.jpg",
      "price": "$$"
    },
    {
      "id": "8k2LpUeM6OyH5G3bPdZx5h",
      "name": "Cozy Corner",
      "location": {
        "address1": "456 Cozy Ln",
        "city": "Relaxville",
        "zip_code": "67890",
        "country": "US",
        "state": "TX"
      },
      "rating": 4.0,
      "phone": "+15559876543",
      "image_url": "https://example.com/image2.jpg",
      "price": "$"
    }
  ],
  "total": 2
};
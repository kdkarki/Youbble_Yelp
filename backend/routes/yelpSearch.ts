import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

const mockYelpResponse = 
{
  "businesses": [
    {
      "id": "9j3LpUwW9OyK6W3qPdGh1g",
      "name": "Good Eats Cafe 12",
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


router.post('/yelp-search', (req: Request, res: Response) => {
  res.json(mockYelpResponse);
});

export default router;

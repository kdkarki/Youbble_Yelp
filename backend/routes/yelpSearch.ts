import { Router } from 'express';
import axios from 'axios';

const router = Router();
//const YELP_API_KEY = process.env.YELP_API_KEY; // Replace this with your Yelp API Key

router.get('/yelp-search', async (req, res) => {
    const { zipcode, searchTerm } = req.query;

    if (!zipcode || !searchTerm) {
        return res.status(400).send({ error: 'Both zipcode and searchTerm are required.' });
    }

    const data: {businesses: [], total: number} = {businesses: [], total: 0};
    let offset = 0;
    
    try {
        while(true) {
            const yelpResponse = await axios.get('https://api.yelp.com/v3/businesses/search', {
                headers: {
                    'Authorization': `Bearer ${process.env.YELP_API_KEY}`,
                },
                params: {
                    location: zipcode,
                    term: searchTerm,
                    limit: 50
                },
            });
            data.businesses.push(...yelpResponse.data.businesses as []);
            offset += 50;
            if (offset >= yelpResponse.data.total) {
                data.total = yelpResponse.data.total as number;
                break;
            }
        }

        res.send(data);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch data from Yelp.' });
    }
});

export default router;

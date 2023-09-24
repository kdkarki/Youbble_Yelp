import express, { Request, Response } from 'express';
//import mongoose from 'mongoose';
import cors from 'cors';
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';
import yelpSearchRoute from './routes/yelpSearch';
import userRequestRoute from './routes/userRequest';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port: number = 8080;


// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  });

// Connect to MongoDB
//mongoose.connect('mongodb://mymongo_instance:27017/mydatabase');

app.use(cors());
app.use(express.json());

app.use('/api/access', checkJwt, userRequestRoute);

app.use('/api', checkJwt, yelpSearchRoute);

app.listen(port, () => console.log(`Backend server started on port ${port}`));
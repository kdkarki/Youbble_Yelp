import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { expressjwt } from 'express-jwt';
import jwksRsa, { expressJwtSecret } from 'jwks-rsa';
import yelpSearchRoute from './routes/yelpSearch';
import userRequestRoute from './routes/userRequest';
import dotenv from 'dotenv';
import manageAccessRequest from './routes/manageAccessRequest';
import { checkUserRole } from './middleware/checkUserRole';

dotenv.config();

const app = express();
const port: number = 5000;


// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt =
  expressjwt({
    // Dynamically provide a signing key based on the `kid` in the header and the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `${process.env.AUTH0_ISSUER_BASE_URL}/.well-known/jwks.json`
    }) as any,
    audience: process.env.AUTH0_AUDIENCE,   // Usually the API identifier you set up in Auth0
    issuer: `${process.env.AUTH0_ISSUER_BASE_URL}/`, //make sure there is trailing / here
    algorithms: ['RS256']
  });

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI ?? 'mongodb://mymongo_instance:27017/mydatabase');

app.use(cors());
app.use(express.json());

app.use('/api/user', checkJwt, userRequestRoute);

app.use('/api/admin', checkJwt, checkUserRole(['admin']), manageAccessRequest);

app.use('/api', checkJwt, checkUserRole(['admin', 'user']), yelpSearchRoute);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token.');
  }
});

app.listen(port, () => console.log(`Backend server started on port ${port}`));
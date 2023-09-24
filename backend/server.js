"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import mongoose from 'mongoose';
const cors_1 = __importDefault(require("cors"));
const yelpSearch_1 = __importDefault(require("./routes/yelpSearch"));
const userRequest_1 = __importDefault(require("./routes/userRequest"));
const app = (0, express_1.default)();
const port = 8080;
// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
/* const checkJwt = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  }); */
// Connect to MongoDB
//mongoose.connect('mongodb://mymongo_instance:27017/mydatabase');
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/access', userRequest_1.default);
app.use('/api', yelpSearch_1.default);
app.listen(port, () => console.log(`Backend server started on port ${port}`));

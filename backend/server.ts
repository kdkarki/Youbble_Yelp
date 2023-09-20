import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
const port: number = 8080;

// Define mongoose schema & model
interface IAccessRequest extends mongoose.Document {
    userId: string;
    requestedRole: string;
    status: string;
}

const AccessRequestSchema = new mongoose.Schema({
    userId: String,
    requestedRole: String,
    status: String
});

const AccessRequest = mongoose.model<IAccessRequest>('AccessRequest', AccessRequestSchema);

// Connect to MongoDB
mongoose.connect('mongodb://mymongo_instance:27017/mydatabase');

app.use(express.json());

app.post('/request-access', (req: Request, res: Response) => {
    // Store the user's access request in MongoDB
    const accessRequest = new AccessRequest({
        userId: req.body.userId, // Example: Ideally, this should come from an authenticated user's ID.
        requestedRole: req.body.requestedRole,
        status: 'Pending'
    });

    /* accessRequest.save(() => {
        //if (err) return res.status(500).send(err);
        return res.status(200).send({ message: 'Access request saved successfully!' });
    }); */
});

app.get('/admin/pending-requests', (req: Request, res: Response) => {
    // Fetch and return all pending access requests for admin users
    AccessRequest.find({ status: 'Pending' }, (err: any, requests: any) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(requests);
    });
});

// ... More routes

app.listen(port, () => console.log(`Backend server started on port ${port}`));

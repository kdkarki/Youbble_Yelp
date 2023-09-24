import express, { Request, Response, Router } from 'express';
import mongoose from 'mongoose';
import { IAccessRequest, AccessRequestSchema } from '../database/accessRequest';

const router: Router = express.Router();

const AccessRequest = mongoose.model<IAccessRequest>('AccessRequest', AccessRequestSchema);

router.post('/request-access', (req: Request, res: Response) => {
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

router.get('/admin/pending-requests', (req: Request, res: Response) => {
    // Fetch and return all pending access requests for admin users
    AccessRequest.find({ status: 'Pending' }, (err: any, requests: any) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(requests);
    });
});

export default router;
import express, { Request, Response, Router } from 'express';
import { AccessRequestSchema, IAccessRequest } from '../database/accessRequest';
import mongoose from 'mongoose';
import { User } from '../Models/User';

const router: Router = express.Router();
const AccessRequest = mongoose.model<IAccessRequest>('AccessRequest', AccessRequestSchema);

router.get('/access-requests', async (req: Request, res: Response) => {
    try {
        const accessRequests = await AccessRequest.find({status: 'Pending'});
        res.json({ accessRequests });
    } catch (error) {
        res.status(500).send('Error fetching access requests');
    }
});

router.post('/assign-role/:id', async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const { role } = req.body;

        //get pending access request
        const pendingAccessRequest = await AccessRequest.findOne({userId: userId, status: 'Pending'});

        const createUser = await User.create({userId: userId, email: pendingAccessRequest?.email, roles: [role]});
        if (!createUser) {
            return res.status(500).send('Error creating user');
        }
        //update access request status
        await AccessRequest.updateOne({userId: userId}, {
            status: 'Approved',
            approvedBy: req.auth?.sub,
            approvedDate: new Date()});

        res.json({ success: true });
        } catch (error) {
        res.status(500).send('Error assigning role');
        }
  });

export default router;
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

router.get('/role', async (req: Request, res: Response) => {
    try {
      // Obtain user from the request (e.g., from the JWT token)
      const userId = req.auth?.sub;
  
      // Fetch the user role from your database
      const role = '';//await getUserRole(userId);
  
      if (role) {
        res.json({ hasRole: true, role });
      } else {
        res.json({ hasRole: false });
      }
    } catch (error) {
      res.status(500).send('Error checking user role');
    }
  });

  router.post('/assign-role', async (req: Request, res: Response) => {
    try {
      const userId = req.auth?.sub;
      const { role } = req.body;
  
      // Store the role in your database
      //await assignRoleToUser(userId, role);
  
      res.json({ success: true });
    } catch (error) {
      res.status(500).send('Error assigning role');
    }
  });
  

export default router;
import express, { Request, Response, Router } from 'express';
import mongoose from 'mongoose';
import { IAccessRequest, AccessRequestSchema } from '../database/accessRequest';
import { User } from '../Models/User';

const router: Router = express.Router();

const AccessRequest = mongoose.model<IAccessRequest>('AccessRequest', AccessRequestSchema);

router.get('/access-request', async (req: Request, res: Response) => {
  const userId = req.auth?.sub;
  if (!userId) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
  const requestedRoles = await AccessRequest.findOne({userId: userId});
  return res.status(200).send(requestedRoles ?? {});
});

router.post('/access-request', async (req: Request, res: Response) => {
  //check if user already has as acess request
  const requestedRoles = await AccessRequest.findOne({userId: req.auth?.sub});
  if (requestedRoles) {
    return res.status(401).send({ status: 401, message: 'User already has an access request' });
  }
  // Store the user's access request in MongoDB
  const accessRequest = new AccessRequest({
      userId: req.auth?.sub, // Example: Ideally, this should come from an authenticated user's ID.
      requestedRole: req.body.requestedRole,
      email: req.body.email,
      status: 'Pending'
  });

  const saveResult = await accessRequest.save();
  if (saveResult) {
      return res.status(200).send({ status: 200, message: 'Access request saved successfully!' });
  } else {
      return res.status(500).send({ status: 500, message: 'Error saving access request' });
  }
});

router.get('/role', async (req: Request, res: Response) => {
  try {
    // Obtain user from the request (e.g., from the JWT token)
    const userId = req.auth?.sub;

    // Fetch the user role from your database
    const roles = userId ? await getUserRole(userId) : null;

    res.json({ roles });
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
  
const getUserRole = async (userId: string): Promise<string[]> => {
  try{
  const user = await User.findOne({userId: userId}); //await User.findById(userId).exec();
  return user?.roles ?? [];
  } catch (error) {
    console.log(error);
      throw error;
  }
}

export default router;
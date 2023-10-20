import { Request, Response, NextFunction } from 'express';
import { User } from '../Models/User';

export const checkUserRole = (requiredRoles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = req.auth?.sub; // Assuming the decoded JWT payload is attached to req.user by express-jwt

    if (!user) {
      return res.status(401).send({ message: 'Unauthorized' });
    }

    const userRole = await getUserRole(user);
    if (userRole?.some((uRole) => requiredRoles.includes(uRole))) {
      return next();
    }

    return res.status(403).send({ message: 'Access denied. Insufficient role.' });
  }
}

const getUserRole = async (userId: string): Promise<string[]> => {
    try{
    const user = await User.findOne({userId: userId}); //await User.findById(userId).exec();
    return user?.roles ?? [];
    } catch (error) {
      console.log(error);
        throw error;
    }
  }

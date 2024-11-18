import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { IGetUserAuthInfoRequest } from 'src/controllers/userController';

interface CustomJwtPayload extends JwtPayload {
  id: string; // Add other properties as needed
}

export const authenticate = (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
): any => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    if (typeof decoded === 'object' && 'id' in decoded) {
      req.user = { id: (decoded as CustomJwtPayload).id }; // Type assertion to ensure decoded has `id`
      next();
    } else {
      return res.status(401).json({ message: 'Token is not valid' });
    }
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

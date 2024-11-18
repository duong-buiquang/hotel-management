// File: src/controllers/userController.ts
import { Request, Response } from 'express';
import User from '../models/User';
export interface IGetUserAuthInfoRequest extends Request {
  user: any;
}
export const getProfile = async (
  req: IGetUserAuthInfoRequest,
  res: Response
): Promise<any> => {
  try {
    const user = await User.findById(req?.user?.id); // Assuming req.user is populated by middleware
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProfile = async (
  req: IGetUserAuthInfoRequest,
  res: Response
): Promise<any> => {
  try {
    const { age, hobbies } = req.body;
    const user = await User.findByIdAndUpdate(
      req?.user?.id, // Assuming req.user is populated by middleware
      { age, hobbies },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

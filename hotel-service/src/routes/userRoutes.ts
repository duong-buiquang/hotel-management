// File: src/routes/userRoutes.ts
import { Router } from 'express';
import {
  getAllUsers,
  loginUser,
  signupUser
} from '../controllers/authController';
import { getProfile, updateProfile } from '../controllers/userController';
import { authenticate } from '../middleware/auth';

const router: any = Router();

router.post('/signup', signupUser); // Signup route
router.post('/signin', loginUser); // Login route
router.get('/profile', authenticate, getProfile); // Get profile route (protected)
router.put('/profile', authenticate, updateProfile); // Update profile route (protected)
router.get('/', getAllUsers);

export default router;

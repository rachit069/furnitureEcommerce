import express from 'express';
import { getAllUsers, getUserById } from '../controllers/userController.js';
import { authenticateUser, authorizeRoles } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Admin-only routes
router.get(
  '/',
  authenticateUser,
  authorizeRoles('Admin'), 
  getAllUsers
);

// User can view own profile, Admin can view any
router.get(
  '/:id',
  authenticateUser,
  (req, res, next) => {
    // Allow access if:
    // 1. User is Admin, OR
    // 2. User is accessing their own profile
    if (req.user.role.name === 'Admin' || req.user.id === parseInt(req.params.id)) {
      return next();
    }
    res.status(403).json({ message: 'Forbidden' });
  },
  getUserById
);

export default router;

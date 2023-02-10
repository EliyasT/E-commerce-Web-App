import express from 'express';
import {
    deleteUser,
  getAllUsers,
  getUserById,
  signin,
  signup,
  updateProfile,
  updateUser,
} from '../controllers/userController.js';
import { isAdmin, isAuth } from '../utils.js';

const userRouter = express.Router();

userRouter.get('/', isAuth, isAdmin, getAllUsers);
userRouter.get('/:id', isAuth, isAdmin, getUserById);
userRouter.put('/profile', isAuth, updateProfile);
userRouter.put('/:id', isAuth,isAdmin, updateUser);
userRouter.delete('/:id', isAuth, isAdmin, deleteUser);
userRouter.post('/signin', signin);
userRouter.post('/signup', signup);

export default userRouter;

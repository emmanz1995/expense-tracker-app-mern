import express from 'express';
import UserRepository from '../repositories/userRepository';
import UserService from '../service/UserService';
import UserController from '../controllers/user.controller';
import BcryptService from '../util/BcryptService';

const router = express.Router();

const bcryptService = new BcryptService();
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userRoutes = new UserController(userService, bcryptService);

router.post('/', userRoutes.signUp);
router.post('/auth', userRoutes.signIn);

export default router;
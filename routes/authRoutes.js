import express from 'express';
import authUser from '../controllers/authUserController.js';
const router = express.Router();

router.get('/signin', authUser.signin);
router.get('/signup', authUser.signup);
router.post('/signup', authUser.createUserAccount);
router.post('/signin', authUser.loginUser);

export default router;
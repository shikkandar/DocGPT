import express from 'express';
import authUser from '../controllers/authUserController.js';
const router = express.Router();

/**
 * @route GET /signin
 * @description Displays the Sign-in page
 * @access Public
 */
router.get('/signin', authUser.signin);

/**
 * @route POST /signin
 * @description Displays the Sign-in page
 * @access Public
 */
router.post('/signin', authUser.loginUser);

/**
 * @route GET /signup
 * @description Displays the Sign-in page
 * @access Public
 */
router.get('/signup', authUser.signup);

/**
 * @route POST /signup
 * @description Displays the Sign-in page
 * @access Public
 */
router.post('/signup', authUser.createUserAccount);

export default router;

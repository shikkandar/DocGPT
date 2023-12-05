import express from 'express';
import home from '../controllers/homeController.js';

const router = express.Router();

/**
 * @route GET /
 * @description Displays home page
 * @access Private
 */
router.get('/', home.home);

/**
 * @route GET /conversation
 * @description Displays conversation page
 * @access Private
 */
router.get('/conversation', home.conversation);

/**
 * @route GET /chat
 * @description Displays home page
 * @access Private
 */
router.post('/chat', home.modelReply);

export default router;

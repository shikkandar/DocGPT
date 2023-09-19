import express from 'express';
import home from '../controllers/homeController.js';

const router = express.Router();

router.get('/', home.home);
router.get('/conversation', home.conversation);

export default router;
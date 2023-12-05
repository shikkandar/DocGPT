import express from 'express';
import uploadFile from '../controllers/uploadFileController.js';
import upload from '../misc/multer.js';

const router = express.Router();

router.get('/uploads/:id', uploadFile.getUploadedFile);
router.post('/upload', upload.single('userdocument'), uploadFile.uploadPDF);

export default router;

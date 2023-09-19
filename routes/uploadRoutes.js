import express from 'express';
import uploadFile from '../controllers/uploadFileController.js';

import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `./public/uploads`);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post('/upload', upload.single('userdocument'), uploadFile.uploadPDF);

export default router;

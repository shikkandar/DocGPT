import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        req.locals.originalName = file.originalname;
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}`);
    },
});
const upload = multer({ storage: storage });
export default upload;
//# sourceMappingURL=file-storage.js.map
import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(req.file);
        console.log(file);
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${file.originalname}`);
    },
});
const upload = multer({ storage: storage });
export default upload;
//# sourceMappingURL=file-storage.js.map
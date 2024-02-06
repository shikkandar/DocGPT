import { v2 as cloudinary } from "cloudinary";
import ChatHistory from "../models/ChatHistory.js";
// Cloudinary configuration
//TODO: need to put it into env file
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Cloudinary upload function
const uploadFileOnCloudinary = async (req, res, next, filePath) => {
    try {
        cloudinary.uploader.upload(filePath, { public_id: "olympic_flag", resource_type: "raw" }, async function (error, result) {
            const userChatHistory = new ChatHistory({ userId: req.locals.id });
            await userChatHistory.save();
            const pdfURL = result.url;
            const response = await ChatHistory.findByIdAndUpdate({ _id: userChatHistory._id.toString() }, { pdfUrl: result.url }, { new: true });
            console.log("I am checking pdfparser");
            req.locals = response._id.toString();
            console.log(req.locals);
            // res.status(200).json(response);
            next();
        });
    }
    catch (error) {
        console.error(error);
    }
};
// Multer middleware to handle file upload
const uploadMiddleware = (req, res, next) => {
    const filePath = req.file.path;
    uploadFileOnCloudinary(req, res, next, filePath);
    next();
};
export default uploadMiddleware;
//# sourceMappingURL=cloudinary.js.map
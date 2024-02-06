import { Request, Response, NextFunction } from "express";
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
const uploadFileOnCloudinary = async (
  req: Request,
  res: Response,
  filePath: string,
) => {
  try {
    cloudinary.uploader.upload(
      filePath,
      { public_id: "olympic_flag", resource_type: "raw" },
      async function (error, result) {
        const userChatHistory = new ChatHistory({ userId: req.locals.id });
        await userChatHistory.save();
        const pdfURL = result.url;
        const response = await ChatHistory.findByIdAndUpdate(
          { _id: userChatHistory._id.toString() },
          { pdfUrl: result.url },
          { new: true },
        );
        res.status(200).json(response);
      },
    );
  } catch (error) {
    console.error(error);
  }
};

// Multer middleware to handle file upload
const uploadMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const filePath = req.file.path;
  uploadFileOnCloudinary(req, res, filePath);
  next();
};

export default uploadMiddleware;

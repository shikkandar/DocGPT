import { Request, Response, NextFunction } from "express";
import { v2 as cloudinary } from "cloudinary";

import ChatHistory from "../models/ChatHistory.js";

// Cloudinary configuration
//TODO: need to put it into env file
cloudinary.config({
  cloud_name: "dmyjhicsl",
  api_key: "822545885516375",
  api_secret: "bY84kME2oPJzpdFlBvSJJ2cYCfk",
});

// Cloudinary upload function
const uploadFileOnCloudinary = async (
  req: Request,
  res: Response,
  next: NextFunction,
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
        console.log("I am checking pdfparser");
        req.locals = response._id.toString();
        console.log(req.locals);
        // res.status(200).json(response);
        next();
      },
    );
  } catch (error) {
    console.error(error);
  }
};

// Multer middleware to handle file upload
const uploadMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const filePath = req.file.path;
  uploadFileOnCloudinary(req, res,next, filePath);
  next();
};

export default uploadMiddleware;

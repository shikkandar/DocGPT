import Router from "express";
import {
  validator,
  signupValidator,
  loginValidator,
} from "../utils/validator.js";
import userController from "../controllers/user-controller.js";
import { verifyToken } from "../utils/token-manager.js";
import upload from "../utils/file-storage.js";
import uploadMiddleware from "../utils/cloudinary.js";
import { getUserFromToken } from "../utils/user-decoder.js";
import { pdfDataExtractor } from "../utils/python-communicator.js";
import { verifyOTP } from "../utils/otp.js";

const appRouter = Router();

appRouter.post(
  "/signup",
  validator(signupValidator),
  userController.signupUser,
);
appRouter.post(
  "/login",
  validator(loginValidator),
  userController.loginUser
);
appRouter.get(
  "/check-auth",
  verifyToken,
  userController.authenticateUser
);
appRouter.post(
  "/verifyOTP/:otp",
  getUserFromToken,
  verifyOTP)
appRouter.post(
  "/upload/:chatID",
  getUserFromToken,
  upload.single('document'),
  uploadMiddleware,
  pdfDataExtractor,
  userController.uploadFile
)
export default appRouter;

import Router from "express";
import {
  validator,
  signupValidator,
  loginValidator,
} from "../utils/validator.js";
import userController from "../controllers/user-controller.js";

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

export default appRouter;

import Router from "express";
import { validateSignUp, validator } from "../utils/validator.js";
import userController from "../controllers/user-controller.js";

const appRouter = Router();

appRouter.post(
  "/signup",
  validateSignUp(validator),
  userController.signupUser,
);

export default appRouter;

import Router from "express";
import { verifyToken } from "../utils/token-manager.js";
import { getUserFromToken } from "../utils/user-decoder.js";
import chatController from "../controllers/chat-controller.js";

const chatRouter = Router();

chatRouter.get("/");
chatRouter.post("/", getUserFromToken, chatController.storeUserChatMessages);

export default chatRouter;

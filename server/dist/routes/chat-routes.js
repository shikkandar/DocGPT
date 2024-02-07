import Router from "express";
import { getUserFromToken } from "../utils/user-decoder.js";
import chatController from "../controllers/chat-controller.js";
const chatRouter = Router();
chatRouter.get("/");
chatRouter.post("/", getUserFromToken, chatController.storeUserChatMessages);
export default chatRouter;
//# sourceMappingURL=chat-routes.js.map
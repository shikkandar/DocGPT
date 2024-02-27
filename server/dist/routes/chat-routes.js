import Router from "express";
import { getUserFromToken } from "../utils/user-decoder.js";
import chatController from "../controllers/chat-controller.js";
import { postChatMessageToOpenAI } from "../middleware/openAiMiddleware.js";
const chatRouter = Router();
chatRouter.get("/", getUserFromToken, chatController.fetchAllChats);
chatRouter.get("/:chatID", getUserFromToken, chatController.getChatHistory);
chatRouter.post("/:chatID", getUserFromToken, chatController.storeUserChatMessages, postChatMessageToOpenAI);
export default chatRouter;
//# sourceMappingURL=chat-routes.js.map
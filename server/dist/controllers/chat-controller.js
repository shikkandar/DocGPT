import ChatHistory from "../models/ChatHistory.js";
// const openai = new OpenAI();
class chatController {
    static getChatHistory = () => { };
    static storeUserChatMessages = async (req, res, next) => {
        try {
            console.log(req.body);
            const data = {
                role: "user",
                content: req.body.message,
            };
            console.log(req.locals);
            const user = await ChatHistory.findOneAndUpdate({ userId: req.locals.id }, { $push: { conversation: data } }, { new: true });
            console.log(user);
            next();
        }
        catch (error) {
            console.error("An error occurred:", error);
        }
    };
}
export default chatController;
//# sourceMappingURL=chat-controller.js.map
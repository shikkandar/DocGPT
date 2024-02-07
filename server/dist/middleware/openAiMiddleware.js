import OpenAI from "openai";
import configureOpenAI from "../config/openai-config.js";
import ChatHistory from "../models/ChatHistory.js";
const config = configureOpenAI();
const openai = new OpenAI(config);
export const postChatMessageToOpenAI = async (req, res, next) => {
    const modelResponse = await openai.chat.completions.create({
        messages: [
            { role: "user", content: "What is your name?" },
            { role: "assistant", content: "I am chatGPT" },
        ],
        model: "gpt-3.5-turbo",
    });
    const data = {
        role: "assisatant",
        content: modelResponse.choices[0].message.content,
    };
    const userChat = await ChatHistory.findOneAndUpdate({ userId: req.locals.id }, { $push: { conversation: data } }, { new: true });
    res.status(200).json({ userChat });
};
//# sourceMappingURL=openAiMiddleware.js.map
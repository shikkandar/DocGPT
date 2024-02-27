import { Request, Response, NextFuntion } from "express";
import OpenAI from "openai";
import configureOpenAI from "../config/openai-config.js";
import ChatHistory from "../models/ChatHistory.js";

// const config = configureOpenAI();

// const openai = new OpenAI(config);

export const postChatMessageToOpenAI = async (
  req: Request,
  res: Response,
  next: NextFuntion,
) => {
     console.log(req.params.chatID); 
     const chat = await ChatHistory.findOne({chatID: req.params.chatID});
     
     console.log("User Chat in openAIMiddleWare", chat);
//   const modelResponse = await openai.chat.completions.create({
//     messages: [
//       { role: "user", content: "What is your name?" },
//       { role: "assistant", content: "I am chatGPT" },
//     ],
//     model: "gpt-3.5-turbo",
//   });
  const data = {
    role: "assisatant",
    content: "The document is about the Resume of a person name Yuna Shrestha.",
  };
  const userChat = await ChatHistory.findOneAndUpdate(
    { chatID : req.params.chatID },
    { $push: { conversation: data } },
    { new: true },
  );
  res.status(200).json({userChat});
};

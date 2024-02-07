import { Request, Response, NextFunction } from "express";
import OpenAI from "openai";
import User from "../models/User.js";
import ChatHistory from "../models/ChatHistory.js";

// const openai = new OpenAI();

class chatController {
  static getChatHistory = () => {};
  static storeUserChatMessages = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
        console.log(req.body);
        const data = {
          role: "user",
          content: req.body.message,
        };
        console.log(req.locals);
        const user = await ChatHistory.findOneAndUpdate(
          { userId: req.locals.id },
          { $push: { conversation: data }},
          { new: true },
        );
        console.log(user);
        next();
      } catch (error) {
        console.error("An error occurred:", error);
      }
      
  };
  
}
export default chatController;

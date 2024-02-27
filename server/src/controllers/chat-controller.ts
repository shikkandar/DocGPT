import { Request, Response, NextFunction } from "express";
import OpenAI from "openai";
import User from "../models/User.js";
import ChatHistory from "../models/ChatHistory.js";

// const openai = new OpenAI();

class chatController {
  static getChatHistory = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      console.log("Get use chat controller", req.locals.id);
      const chathistory = await ChatHistory.findOne({
        chatID: req.params.chatID,
      });
      res.status(200).json(chathistory);
    } catch (error) {
      console.log(error.message);
    }
  };

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
        { chatID: req.params.chatID },
        { $push: { conversation: data } },
        { new: true },
      );
      console.log(user);
      next();
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  static fetchAllChats = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const allChat = await ChatHistory.find({userId: req.locals.id});
    res.status(200).json({allChat});
  };
}
export default chatController;

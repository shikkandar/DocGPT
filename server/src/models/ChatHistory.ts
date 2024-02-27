import mongoose from "mongoose";

const ChatHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  chatID: {
    type: String,
  },
  asset_id:{
    type: String,
  },
  public_id:{
    type: String,
  },
  pdfUrl:{
    type: String,
  },
  title: {
    type: String,
  },
  pdfSecureUrl: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  conversation: [
    {
     role: {
      type: String,
     },
     content: {
      type: String,
     }
    },
  ],
})

export default mongoose.model("ChatHistory", ChatHistorySchema);

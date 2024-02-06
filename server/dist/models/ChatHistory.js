import mongoose from "mongoose";
const ChatHistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    pdfUrl: {
        type: String,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    conversation: [
        {
            _id: false,
            sender: {
                type: String,
                enum: ["user", "model"],
                message: {
                    type: String,
                },
                timestamp: {
                    type: Date,
                    default: Date.now,
                },
            },
        },
    ],
});
export default mongoose.model("ChatHistory", ChatHistorySchema);
//# sourceMappingURL=ChatHistory.js.map
import ChatHistory from "../models/ChatHistory.js";
import { spawn } from "child_process";
import { fileURLToPath } from 'url';
import path from 'path';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const pdfDataExtractor = (req, res, next) => {
    const pythonProcess = spawn("python", [
        path.resolve(__dirname, "../../pythons-scripts/pdfparser.py"),
    ]);
    let pythonOutput = Buffer.from([]);
    pythonProcess.stdout.on("data", (data) => {
        pythonOutput = Buffer.concat([pythonOutput, data]);
    });
    pythonProcess.stderr.on("data", (data) => {
        console.error(`Python Error: ${data}`);
    });
    pythonProcess.on("close", async (code) => {
        const decodedOutput = pythonOutput.toString("utf-8");
        const conversationData = {
            role: "user",
            content: decodedOutput,
        };
        try {
            const userChatHistory = await ChatHistory.findByIdAndUpdate({ _id: req.locals }, { $push: { conversation: conversationData } }, { new: true });
            console.log(userChatHistory);
            return decodedOutput;
        }
        catch (error) {
            console.error("Error updating conversation:", error);
            return null;
        }
    });
};
//# sourceMappingURL=python-communicator.js.map
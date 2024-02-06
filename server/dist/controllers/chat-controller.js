import OpenAI from "openai";
const openai = new OpenAI();
class chatController {
    static getChatHistory = () => {
    };
    static postChatMessageToOpenAI = async () => {
        const modelResponse = await openai.chat.completions.create({
            messages: [
                { role: 'user', content: 'What is your name?' },
                { role: 'assistant', content: 'I am chatGPT' }
            ],
            model: 'gpt-3.5-turbo'
        });
    };
}
//# sourceMappingURL=chat-controller.js.map
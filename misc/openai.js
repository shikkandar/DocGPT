// import OpenAI from 'openai';
// import chat from '../controllers/chatController.js';

// class openAI {
//     static modelReply = async (req, res) => {
//         const userContent = chat.getUserMessage(req);
//         console.log(userContent);
//         const openai = new OpenAI({
//             apiKey:
//                 process.env.OPENAI_API_KEY ||
//                 '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',
//         });

//         const chatCompletion = await openai.chat.completions.create({
//             messages: [
//                 {
//                     role: 'system',
//                     content:
//                         'People often struggle to understand documents specially douments like financial document, medical document and legal document. Your job is to simplify it.',
//                 },
//                 { role: 'user', content: `${userContent}` },
//             ],
//             model: 'gpt-3.5-turbo',
//         });
//         console.log(chatCompletion.choices[0].message.content);
//         const responseObject = {
//             reply: `${chatCompletion.choices[0].message.content}`,
//         };
//         console.log(responseObject.reply);
//         console.log(res);
//         // Set the Content-Type header to indicate JSON content
//         res.setHeader('Content-Type', 'application/json');

//         // Send the JSON response with a status code of 200 (OK)
//         res.status(200).json(responseObject);
//     };
// }

// export default openAI;

import path from 'path';
import url from 'url';
import OpenAI from 'openai';
import { docData } from './uploadFileController.js';

class home {
    static home = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const filePath = path.join(
            __dirname,
            '..',
            'views',
            'index.ejs'
        );
        res.render(filePath);
        // try{
        //     throw new Error("Something went wrong");
        // }
        // catch(e){
        //     console.log('Error: ', e);
        // }
        
    };
    static conversation = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const filePath = path.join(
            __dirname,
            '..',
            'views',
            'conversation.ejs'
        );
        res.render(filePath);
    };
    static modelReply = async (req, res) => {
        const userContent = docData || req.body.message;
        const openai = new OpenAI({
            apiKey:
                process.env.OPENAI_API_KEY ||
                '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',
        });

        const chatCompletion = await openai.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content:
                        'People often struggle to understand documents specially douments like financial document, medical document and legal document. Your job is to simplify it.',
                },
                { role: 'user', content: `${userContent}.` },
            ],
            model: 'gpt-3.5-turbo',
        });
        const data = chatCompletion.choices[0].message.content;
        const formattedData = data.replace(/\n/g, '<br>');
        const responseObject = {
            reply: formattedData,
        };
        // Set the Content-Type header to indicate JSON content
        res.setHeader('Content-Type', 'application/json');

        // Send the JSON response with a status code of 200 (OK)
        res.status(200).json(responseObject);
    };
}

export default home;

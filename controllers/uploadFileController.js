import path from 'path';
import url from 'url';
import { parsePdfFileItems } from '../misc/pdfparser.js';

let docData = '';
class uploadFile{
    static getUploadedFile = (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const filePath = path.join(
            __dirname,
            '..',
            'uploads',
            `${req.params.id}`
        );
        docData = parsePdfFileItems(filePath);
        res.sendFile(filePath);
    };
    static uploadPDF = (req, res) => {
        //  parsePdfFileItems(`/uploads/${req.file.filename}`,);
         res.render('conversation.ejs', {data: `${req.file.filename}`});
    };
}

export default uploadFile;
export {docData};



import path from 'path';
import url from 'url';

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
    };
}

export default home;

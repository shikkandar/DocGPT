import path from 'path';
import url from 'url';
import passwordHash from '../misc/hash.js';

import User from '../model/User.js';

class authUser {
    static signin = async (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const filePath = path.join(
            __dirname,
            '..',
            'views',
            'auth',
            'signin.ejs'
        );
        res.render(filePath);
    };
    static signup = async (req, res) => {
        const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const filePath = path.join(
            __dirname,
            '..',
            'views',
            'auth',
            'signup.ejs'
        );
        res.render(filePath);
    };
    static createUserAccount = async (req, res) => {
        const { username, email, password } = req.body;
        const user = new User({
            username: username,
            email: email,
            password: passwordHash(password),
        });

        await user.save();
        res.redirect('/home');
    };
    static loginUser = async (req, res) => {
          const {email, password} = req.body;
          console.log(password);
          console.log(typeof(password));
          const user = await User.findOne({
            email: email
          });
          if(passwordHash(password) == user.password ){
            res.redirect('/home');
          }
          else{
            console.log("no it is not correct");
          }
    };
}

export default authUser;

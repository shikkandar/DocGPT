import User from "../models/User.js";
import { createToken } from "../utils/token-manager.js";
class userController {
   static loginUser = async (req, res, next) => {
      const {email, password} = req.body;
      const user = User.findOne({ email: email });

   }
   //TODO: Implement validator
   static signupUser = async (req, res, next) => {
       const { name, email, password } = req.body;

       const emailExists =  await User.findOne({email});
       console.log(emailExists);
       
       if(emailExists){
         return res.status(500).json({message: 'Email already exists'});
       }
       else{
         const user = new User({ name, email, password });
         await user.save();  
         
         
         const savedUser = await User.findOne({ name });
         const token = createToken(savedUser._id.toString(), savedUser.name);
         res.cookie('auth-token', token, {
           httpOnly: true,
           path: '/',
           signed: true,
         })
  
         return res.status(200).json({ message:"OK", userCreated: savedUser});
       }
       
   }
}
export default userController